<template>
    <div class="box form">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Form to create new task">
                <input type="text" class="input" placeholder="What task do you want start?" v-model="taskDescription">
            </div>
            <div class="column">
                <Timer @finishedTimer="finishTask"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Timer from "./Timer.vue";

export default defineComponent({
    name: "TaskForm",
    data() {
        return {
            taskDescription: ''
        }
    },
    components: { Timer },
    methods: {
        finishTask(elapsedTime: number): void {
            console.log('Elapsed time', elapsedTime);
            console.log('Task description', this.taskDescription);
            this.$emit('addTaskEvent',{
                'description': this.taskDescription,
                'elapsedTime': elapsedTime
            });
            this.taskDescription = '';
        }
    },
    emits: ['addTaskEvent']
})
</script>

<style>
.form {
    color: var(--text-primary);
    background-color: var(--bg-primary);
}
</style>
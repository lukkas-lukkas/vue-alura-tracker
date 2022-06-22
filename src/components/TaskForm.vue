<template>
    <div class="box form">
        <div class="columns">
            <div class="column is-5" role="form" aria-label="Form to create new task">
                <input type="text" class="input" placeholder="What task do you want start?" v-model="taskDescription">
            </div>
            <div class="column is-3">
                <dic class="select">
                    <select v-model="projectId">
                        <option value="">
                            Select the projetc
                        </option>
                        <option :value="project.id" v-for="project in projects" :key="project.id">
                            {{ project.name }}
                        </option>
                    </select>
                </dic>
            </div>
            <div class="column">
                <Timer @finishedTimer="finishTask"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { key } from "@/store";
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import Timer from "./Timer.vue";

export default defineComponent({
    name: "TaskForm",
    data() {
        return {
            taskDescription: '',
            projectId: ''
        }
    },
    components: { Timer },
    methods: {
        finishTask(elapsedTime: number): void {
            this.$emit('addTaskEvent',{
                'description': this.taskDescription,
                'elapsedTime': elapsedTime,
                'project': this.projects.find(project => project.id == this.projectId)
            });
            this.taskDescription = '';
        }
    },
    emits: ['addTaskEvent'],
    setup() {
        const store = useStore(key);

        return {
            projects: computed(() => store.state.projects)
        }
    }
})
</script>

<style>
.form {
    color: var(--text-primary);
    background-color: var(--bg-primary);
}
</style>
<template>
    <div class="box form">
        <div class="columns">
            <div class="column is-5" role="form" aria-label="Form to create new task">
                <input type="text" class="input" placeholder="What task do you want start?" v-model="taskDescription">
            </div>
            <div class="column is-3">
                <div class="select">
                    <select v-model="projectId">
                        <option value="">
                            Select the projetc
                        </option>
                        <option :value="project.id" v-for="project in projects" :key="project.id">
                            {{ project.name }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="column">
                <Timer @finishedTimer="finishTask"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "@/store";
import Timer from "./Timer.vue";
import { mixinNotification } from "@/mixins/notification";

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
        const store = useStore();

        return {
            store,
            projects: computed(() => store.state.project.projects)
        }
    },
    mixins: [mixinNotification]
})
</script>

<style>
.form {
    color: var(--text-primary);
    background-color: var(--bg-primary);
}
</style>
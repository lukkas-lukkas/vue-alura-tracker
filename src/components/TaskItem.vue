<template>
    <BoxTaskItem>
        <div class="columns clickable" @click="openEditForm">
            <div class="column is-4">
                {{ task.description || 'Task without description' }}
            </div>
            <div class="column is-3">
                {{ task.project?.name || 'Task without project' }}
            </div>
            <div class="column">
                <TimerDisplay :timeInSeconds="task.elapsedTime"/>
            </div>
        </div>
    </BoxTaskItem>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import TimerDisplay from "./TimerDisplay.vue";
import ITask from "@/interfaces/ITask";
import BoxTaskItem from "./BoxTaskItem.vue";

export default defineComponent({
    name: "TaskItem",
    emits: ['taskClickedEvent'],
    components: { TimerDisplay, BoxTaskItem },
    props: {
        task: {
            type: Object as PropType<ITask>,
            required: true
        }
    },
    methods: {
        openEditForm() {
            this.$emit('taskClickedEvent', this.task);
        }
    }
})
</script>

<style scoped>
.clickable {
    cursor: pointer;
}
</style>
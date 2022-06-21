<template>
    <BoxTaskItem>
        <div class="columns">
            <div class="column is-7">
                {{ task.description || 'Task withou description' }}
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
    components: { TimerDisplay, BoxTaskItem },
    props: {
        task: {
            type: Object as PropType<ITask>,
            required: true
        }
    }
})
</script>
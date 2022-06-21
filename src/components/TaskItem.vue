<template>
    <div class="box has-text-weight-bold">
        <div class="columns">
            <div class="column is-7">
                {{ task.description }}
            </div>
            <div class="column">
                <TimerDisplay :timeInSeconds="task.elapsedTime"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import TimerDisplay from "./TimerDisplay.vue";
import ITask from "@/interfaces/ITask";

export default defineComponent({
    name: "TaskItem",
    components: { TimerDisplay },
    props: {
        task: {
            type: Object as PropType<ITask>,
            required: true
        }
    }
})
</script>

<style scoped>
.box {
    background: #FAF0CA;
}
</style>
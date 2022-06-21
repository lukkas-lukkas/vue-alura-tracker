<template>
    <div class="box has-text-weight-bold">
        <div class="columns">
            <div class="column is-7">
                Task description
            </div>
            <div class="column">
                <TimerDisplay :timeInSeconds="10"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TimerDisplay from "./TimerDisplay.vue";

export default defineComponent({
    name: "TaskItem",
    components: { TimerDisplay }
})
</script>

<style scoped>
.box {
    background: #FAF0CA;
}
</style>
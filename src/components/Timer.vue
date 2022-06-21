<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <TimerDisplay :timeInSeconds="timeInSeconds"/>
        <button class="button" @click="startTimer">
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
            <span>play</span>
        </button>
        <button class="button" @click="stopTimer">
            <span class="icon">
                <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TimerDisplay from "./TimerDisplay.vue";

export default defineComponent({
    name: "Timer",
    //Default value to property
    data() {
        return {
            timeInSeconds: 0,
            timer: 0
        };
    },
    methods: {
        startTimer() {
            this.timer = setInterval(() => {
                this.timeInSeconds += 1;
            }, 1000);
            console.log("Starting timer now");
        },
        stopTimer() {
            clearInterval(this.timer);
            this.timeInSeconds = 0;
            console.log("Stoping timer now");
        }
    },
    components: { TimerDisplay }
})
</script>
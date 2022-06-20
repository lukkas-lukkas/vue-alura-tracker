<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Form to create new task">
                <input type="text" class="input" placeholder="What task do you want start?">
            </div>
            <div class="column">
                <div class="is-flex is-align-items-center is-justify-content-space-between">
                    <TimerForm :timeInSeconds="timeInSeconds"/>
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
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TimerForm from "./TimerForm.vue";

export default defineComponent({
    name: "TaskForm",
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
    components: { TimerForm }
})
</script>
<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Form to create new task">
                <input type="text" class="input" placeholder="What task do you want start?">
            </div>
            <div class="column">
                <div class="is-flex is-align-items-center is-justify-content-space-between">
                    <section>
                        <strong>{{ elapsedTime }}</strong>
                    </section>
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

export default defineComponent({
    name: "TaskForm",
    //Default value to property
    data() {
        return {
            timeInSeconds: 0
        }
    },
    // Monitoring a info and react to changes
    computed: {
        elapsedTime(): string {
            const timeInMiliseconds = this.timeInSeconds * 1000;
            return new Date(timeInMiliseconds).toISOString().substr(11,8);
        }
    },
    methods: {
        startTimer() {
            setInterval(() => {
                this.timeInSeconds += 1;
            }, 1000);
            console.log('Starting timer now');
        },
        stopTimer() {
            console.log('Stoping timer now');
        }
    }
})
</script>
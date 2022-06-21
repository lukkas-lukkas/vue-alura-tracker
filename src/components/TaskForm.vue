<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Form to create new task">
                <input type="text" class="input" placeholder="What task do you want start?">
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
    components: { Timer },
    methods: {
        finishTask(elapsedTime: number): void {
            console.log('Elapsed time', elapsedTime);
        }
    }
})
</script>
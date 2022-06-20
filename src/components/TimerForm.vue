<template>
    <section>
        <strong>{{ elapsedTime }}</strong>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "TimerForm",
    props: {
        timeInSeconds: {
            type: Number,
            default: 0
        }
    },
    // Monitoring a info and react to changes
    computed: {
        elapsedTime(): string {
            const timeInMiliseconds = this.timeInSeconds * 1000;
            return new Date(timeInMiliseconds).toISOString().substr(11,8);
        }
    }
})
</script>
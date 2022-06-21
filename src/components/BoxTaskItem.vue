<template>
    <div class="box has-text-weight-bold" :style="BoxTaskItemStyle">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "BoxTaskItem",
    data() {
        return {
            BoxTaskItemStyle: {
                background: '#FAF0CA'
                //'background-color' : 'value'
            }
        }
    }
})
</script>
<template>
    <div class="notifications">
        <article class="message is-success">
            <div class="message-header">
                <p>Success</p>
                <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus
                quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
            </div>
        </article>
        <article class="message is-warning">
            <div class="message-header">
                <p>Warning</p>
                <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus
                quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
            </div>
        </article>
        <article class="message is-danger">
            <div class="message-header">
                <p>Danger</p>
                <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus
                quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
            </div>
        </article>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'Notification'
})
</script>

<style scoped>
.notifications {
    position: absolute;
    right: 0;
    max-width: 400px;
    padding: 8px;
    z-index: 1;
}
</style>
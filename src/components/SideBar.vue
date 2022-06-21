<template>
    <header>
        <h1>
            <img src="../assets/logo.png" alt="Logo alura tracker">
        </h1>
        <button class="button" @click="changeTheme">
            {{ textButtonTheme }}
        </button>
    </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'SideBar',
    data() {
        return {
            activedDarkMode: false
        }
    },
    computed: {
        textButtonTheme() {
            if (this.activedDarkMode) {
                return 'Disable dark mode';
            }

            return 'Active dark mode';
        }
    },
    methods: {
        changeTheme() {
            this.activedDarkMode = !this.activedDarkMode;
            this.$emit('changedThemeEvent', this.activedDarkMode);
        }
    },
    emits: ['changedThemeEvent']
})
</script>

<style scoped>
header {
    padding: 1rem;
    background: #0d3b66;
    width: 100%;
    height: 100vh;
    text-align: center;
}

@media only screen and (max-width: 768px) {
    header {
        padding: 2.5rem;
        height: auto;
    }
}
</style>
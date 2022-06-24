<template>
  <main class="columns is-gapless is-multiline" :class="{'dark-mode': activedDarkMode}">
    <div class="column is-one-quarter">
      <SideBar @changedThemeEvent="changeTheme"/>
    </div>
    <div class="column is-three-quarter content">
      <Notification />
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from './components/SideBar.vue';
import Notification from './components/Notification.vue';

export default defineComponent({
    name: "App",
    components: { SideBar, Notification },
    data() {
      return {
        activedDarkMode: false
      }
    },
    methods: {
      changeTheme(activedDarkMode: boolean) {
        this.activedDarkMode = activedDarkMode;
      }
    }
});
</script>

<style>
.taskList {
  padding: 1.25rem;
}

main {
  --bg-primary: #fff;
  --text-primary: #000;
}

main.dark-mode {
  --bg-primary: #2b2d42;
  --text-primary: #ddd;
}

.content {
  background-color: var(--bg-primary);
}
</style>

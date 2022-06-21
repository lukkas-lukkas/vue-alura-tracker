<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <SideBar />
    </div>
    <div class="column is-three-quarter">
      <TaskForm />
      <div class="taskList">
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from './components/SideBar.vue';
import TaskForm from './components/TaskForm.vue';
import TaskItem from './components/TaskItem.vue';

export default defineComponent({
    name: "App",
    components: { SideBar, TaskForm, TaskItem }
});
</script>

<style scoped>
.taskList {
  padding: 1.25rem;
}
</style>

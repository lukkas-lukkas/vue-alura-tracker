<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <SideBar />
    </div>
    <div class="column is-three-quarter content">
      <TaskForm @addTaskEvent="addTask" />
      <div class="taskList">
        <TaskItem v-for="(task, index) in tasks" :key="index" :task="task"/>
        <BoxTaskItem v-if="listIsEmpty">
          Nenhuma tarefa executada hoje :(
        </BoxTaskItem>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from './components/SideBar.vue';
import TaskForm from './components/TaskForm.vue';
import TaskItem from './components/TaskItem.vue';
import ITask from './interfaces/ITask';
import BoxTaskItem from './components/BoxTaskItem.vue';

export default defineComponent({
    name: "App",
    components: { SideBar, TaskForm, TaskItem, BoxTaskItem },
    data() {
      return {
        tasks: [] as ITask[]
      }
    },
    computed: {
      listIsEmpty(): boolean {
        return this.tasks.length === 0;
      }
    },
    methods: {
      addTask(task: ITask) {
        this.tasks.push(task);
        console.log('Add task', task);
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

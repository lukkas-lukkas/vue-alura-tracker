<template>
    <TaskForm @addTaskEvent="addTask" />
    <div class="taskList">
        <TaskItem v-for="(task, index) in tasks" :key="index" :task="task"/>
        <BoxTaskItem v-if="listIsEmpty">
            No tasks done today :(
        </BoxTaskItem>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TaskForm from '../components/TaskForm.vue';
import TaskItem from '../components/TaskItem.vue';
import ITask from '../interfaces/ITask';
import BoxTaskItem from '../components/BoxTaskItem.vue';

export default defineComponent({
    name: "App",
    components: { TaskForm, TaskItem, BoxTaskItem },
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
      }
    }
});
</script>
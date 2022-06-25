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
import { computed, defineComponent } from 'vue';
import TaskForm from '../components/TaskForm.vue';
import TaskItem from '../components/TaskItem.vue';
import ITask from '../interfaces/ITask';
import BoxTaskItem from '../components/BoxTaskItem.vue';
import { useStore } from '@/store';
import { GET_TASKS, ADD_TASKS } from '@/store/constants';
import useNotifier from "@/hooks/notifier";
import { NotificationType } from '@/interfaces/INotification';

export default defineComponent({
    name: "App",
    components: { TaskForm, TaskItem, BoxTaskItem },
    computed: {
      listIsEmpty(): boolean {
        return this.tasks.length === 0;
      }
    },
    methods: {
      addTask(task: ITask) {
        if (!task.project) {
          this.notifier.notify(
            'Missing project', 
            'The project is required to create task', 
            NotificationType.DANGER
          );
          return;
        }

        this.store.dispatch(ADD_TASKS, task);
      }
    },
    setup() {
        const notifier = useNotifier();
        const store = useStore();

        store.dispatch(GET_TASKS);

        return {
          store,
          notifier,
          tasks: computed(() => store.state.tasks)
        }
    }
});
</script>
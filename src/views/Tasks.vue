<template>
    <TaskForm @addTaskEvent="addTask" />
    <div class="taskList">
        <TaskItem v-for="(task, index) in tasks" :key="index" :task="task" @taskClickedEvent="taskClicked"/>
        <div class="modal" :class="{'is-active': taskSelected}" v-if="taskSelected">
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">Modal title</p>
              <button class="delete" aria-label="close" @click="closeEditForm"></button>
            </header>
            <section class="modal-card-body">
              <div class="field">
                <label for="taskDescription" class="label">
                    Description
                </label>
                <input type="text" class="input" v-model="taskSelected.description" id="taskDescription">
            </div>
            </section>
            <footer class="modal-card-foot">
              <button class="button is-success" @click="editTask">Save changes</button>
              <button class="button" @click="closeEditForm">Cancel</button>
            </footer>
          </div>
        </div>
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
import { GET_TASKS, ADD_TASKS, EDIT_TASK } from '@/store/constants';
import useNotifier from "@/hooks/notifier";
import { NotificationType } from '@/interfaces/INotification';

export default defineComponent({
    name: "App",
    data() {
      return {
        taskSelected: null as ITask | null
      }
    },
    components: { TaskForm, TaskItem, BoxTaskItem },
    computed: {
      listIsEmpty(): boolean {
        if (!this.tasks) {
          return true;
        }

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
      },
      taskClicked(task: ITask) {
        this.taskSelected = task;
      },
      closeEditForm() {
        this.taskSelected = null;
      },
      editTask() {
        this.store.dispatch(EDIT_TASK, this.taskSelected)
          .then(() => this.closeEditForm());
      }
    },
    setup() {
        const notifier = useNotifier();
        const store = useStore();

        store.dispatch(GET_TASKS);

        return {
          store,
          notifier,
          tasks: computed(() => store.state.task.tasks)
        }
    }
});
</script>
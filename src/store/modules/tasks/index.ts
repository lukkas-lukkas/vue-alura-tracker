import clientHttp from "@/http";
import ITask from "@/interfaces/ITask";
import { State } from "@/store";
import { ADD_TASKS, EDIT_TASK, GET_TASKS, SET_TASKS } from "@/store/constants";
import { Module } from "vuex";

export interface TasksState {
    tasks: ITask[]
}

export const task: Module<TasksState, State> = {
    mutations: {
        [SET_TASKS](state, tasks: ITask[]) {
            state.tasks = tasks;
        },
        [ADD_TASKS](state, task: ITask) {
            state.tasks.push(task);
        },
        [EDIT_TASK](state, task: ITask) {
            const index = state.tasks.findIndex(t => t.id == task.id);
            state.tasks[index] = task;
        },
    },
    actions: {
        [GET_TASKS]({ commit }) {
            clientHttp.get('tasks')
                .then(response => commit(SET_TASKS, response.data));
        },
        [ADD_TASKS](state, task: ITask) {
            return clientHttp.post('/tasks', task)
                .then(() => {
                    state.commit(ADD_TASKS, task);
                });
        },
        [EDIT_TASK](state, task: ITask) {
            return clientHttp.put(`/tasks/${task.id}`, task)
                .then(() => state.commit(EDIT_TASK, task));
        },
    }
}
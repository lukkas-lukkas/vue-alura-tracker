import clientHttp from "@/http";
import { INotification } from "@/interfaces/INotification";
import ITask from "@/interfaces/ITask";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { NOTIFY, GET_TASKS, SET_TASKS, ADD_TASKS, EDIT_TASK } from "./constants";
import { ProjectsState, project } from "./modules/projects";

export interface State {
    tasks: ITask[],
    notifications: INotification[],
    project: ProjectsState
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
    state: {
        project: {
            projects: []
        },
        notifications: [],
        tasks: []
    },
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
        [NOTIFY](state, notification: INotification) {
            notification.id = new Date().getTime();
            
            state.notifications.push(notification);

            setInterval(() => {
                state.notifications = state.notifications.filter(n => n.id != notification.id);
            }, 3000)
        }
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
    },
    modules: {
        project
    }
});

export function useStore(): Store<State> {
    return vuexUseStore(key);
}
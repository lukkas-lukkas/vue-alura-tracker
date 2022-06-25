import { INotification } from "@/interfaces/INotification";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { NOTIFY } from "./constants";
import { ProjectsState, project } from "./modules/projects";
import { task, TasksState } from "./modules/tasks";

export interface State {
    task: TasksState,
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
        task: {
            tasks: []
        }
    },
    mutations: {
        [NOTIFY](state, notification: INotification) {
            notification.id = new Date().getTime();
            
            state.notifications.push(notification);

            setInterval(() => {
                state.notifications = state.notifications.filter(n => n.id != notification.id);
            }, 3000)
        }
    },
    modules: {
        project,
        task
    }
});

export function useStore(): Store<State> {
    return vuexUseStore(key);
}
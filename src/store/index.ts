import { INotification } from "@/interfaces/INotification";
import IProject from "@/interfaces/IProject";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { ADD_PROJECT, EDIT_PROJECT, DELETE_PROJECT, NOTIFY } from "./constants";

interface State {
    projects: IProject[],
    notifications: INotification[]
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
    state: {
        projects: [],
        notifications: []
    },
    mutations: {
        [ADD_PROJECT](state, nameProject: string) {
            const project = {
                id: new Date().toISOString(),
                name: nameProject
            } as IProject;

            state.projects.push(project);
        },
        [EDIT_PROJECT](state, project: IProject) {
            const index = state.projects.findIndex(p => p.id == project.id);
            state.projects[index] = project;
        },
        [DELETE_PROJECT](state, id: string) {
            state.projects = state.projects.filter(p => p.id != id);
        },
        [NOTIFY](state, notification: INotification) {
            notification.id = new Date().getTime();
            
            state.notifications.push(notification);

            setInterval(() => {
                state.notifications = state.notifications.filter(n => n.id != notification.id);
            }, 3000)
        }
    }
});

export function useStore(): Store<State> {
    return vuexUseStore(key);
}
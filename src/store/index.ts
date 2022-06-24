import { INotification, NotificationType } from "@/interfaces/INotification";
import IProject from "@/interfaces/IProject";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { ADD_PROJECT, EDIT_PROJECT, DELETE_PROJECT } from "./constants";

interface State {
    projects: IProject[],
    notifications: INotification[]
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
    state: {
        projects: [],
        notifications: [
            {
                id: 1,
                title: 'Success',
                text: 'Notification content',
                type: NotificationType.SUCCESS
            },
            {
                id: 2,
                title: 'Warning',
                text: 'Notification content',
                type: NotificationType.WARNING
            },
            {
                id: 1,
                title: 'Danger',
                text: 'Notification content',
                type: NotificationType.DANGER
            }
        ]
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
        }
    }
});

export function useStore(): Store<State> {
    return vuexUseStore(key);
}
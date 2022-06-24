import clientHttp from "@/http";
import { INotification } from "@/interfaces/INotification";
import IProject from "@/interfaces/IProject";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { GET_PROJECTS } from "./actions";
import { ADD_PROJECT, EDIT_PROJECT, DELETE_PROJECT, SET_PROJECTS, NOTIFY } from "./constants";

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
        [SET_PROJECTS](state, projects: IProject[]) {
            state.projects = projects;
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
        [GET_PROJECTS]({ commit }) {
            clientHttp.get('projects')
                .then(response => commit(SET_PROJECTS, response.data));
        }
    }
});

export function useStore(): Store<State> {
    return vuexUseStore(key);
}
import IProject from "@/interfaces/IProject";
import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

interface State {
    projects: IProject[]
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
    state: {
        projects: []
    },
    mutations: {
        'ADD_PROJECT'(state, nameProject: string) {
            const project = {
                id: new Date().toISOString(),
                name: nameProject
            } as IProject;

            state.projects.push(project);
        }
    }
})
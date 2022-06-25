import IProject from "@/interfaces/IProject";
import { Module } from "vuex";
import { State } from "@/store";
import { ADD_PROJECT, DELETE_PROJECT, EDIT_PROJECT, GET_PROJECTS, SET_PROJECTS } from "@/store/constants";
import clientHttp from "@/http";

export interface ProjectsState {
    projects: IProject[]
}

export const project: Module<ProjectsState, State> = {
    mutations: {
        [ADD_PROJECT](state, project: IProject) {
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
    },
    actions: {
        [GET_PROJECTS]({ commit }) {
            clientHttp.get('projects')
                .then(response => commit(SET_PROJECTS, response.data));
        },
        [ADD_PROJECT](state, nameProject: string) {
            return clientHttp.post('/projects', {
                name: nameProject
            }).then(response => {
                state.commit(ADD_PROJECT, response.data);
            });
        },
        [EDIT_PROJECT](state, project: IProject) {
            return clientHttp.put(`/projects/${project.id}`, {
                name: project.name
            });
        },
        [DELETE_PROJECT]({ commit }, id: string) {
            return clientHttp.delete(`/projects/${id}`)
                .then(() => commit(DELETE_PROJECT, id));
        },
    }
}
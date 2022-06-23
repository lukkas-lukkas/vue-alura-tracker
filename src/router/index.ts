import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Tasks from "../views/Tasks.vue";
import ProjectList from "../views/Projects/ProjectList.vue";
import ProjectForm from "../views/Projects/ProjectForm.vue";
import ProjectsView from "../views/Projects/ProjectsView.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'tasks',
        component: Tasks
    },
    {
        path: '/projects',
        component: ProjectsView,
        children: [
            {
                path: '',
                name: 'projects',
                component: ProjectList
            },
            {
                path: 'create',
                name: 'CreateProject',
                component: ProjectForm
            },
            {
                path: ':id',
                name: 'EditProject',
                component: ProjectForm,
                props: true
            },
        ]
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})

export default router;
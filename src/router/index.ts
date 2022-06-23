import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Tasks from "../views/Tasks.vue";
import ProjectList from "../views/Projects/ProjectList.vue";
import ProjectForm from "../views/Projects/ProjectForm.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'tasks',
        component: Tasks
    },
    {
        path: '/projects',
        name: 'projects',
        component: ProjectList
    },
    {
        path: '/projects/create',
        name: 'CreateProject',
        component: ProjectForm
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})

export default router;
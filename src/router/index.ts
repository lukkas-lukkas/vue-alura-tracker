import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Tasks from "../views/Tasks.vue";
import ProjectList from "../views/Projects/ProjectList.vue";

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
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})

export default router;
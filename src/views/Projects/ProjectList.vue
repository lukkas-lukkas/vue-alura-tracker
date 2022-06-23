<template>
    <section>
        <router-link to="/projects/create" class="button">
            <span class="icon is-small">
                <i class="fas fa-plus"></i>
            </span>
            <span>New project</span>
        </router-link>
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>ACTIONS</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="project in projects" :key="project.id">
                    <td>{{ project.id }}</td>
                    <td>{{ project.name }}</td>
                    <td>
                        <router-link :to="`/projects/${project.id}`" class="button">
                            <span class="icon is-small">
                                <i class="fas fa-pencil-alt"></i>
                            </span>
                        </router-link>
                        <button class="button ml-2 is-danger" @click="deleteProject(project.id)">
                            <span class="icon is-small  ">
                                <i class="fas fa-trash"></i>
                            </span>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";
import { DELETE_PROJECT } from "@/store/constants";

export default defineComponent({
    name: 'ProjectList',
    setup() {
        const store = useStore();

        return {
            store,
            projects: computed(() => store.state.projects)
         }
    },
    methods: {
        deleteProject(id: string) {
            this.store.commit(DELETE_PROJECT, id);
        }
    }
})
</script>
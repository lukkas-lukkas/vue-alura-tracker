<template>
    <section>
        <form @submit.prevent="save">
            <div class="field">
                <label for="projectName" class="label">
                    Project Name
                </label>
                <input type="text" class="input" v-model="projectName" id="projectName">
            </div>
            <div class="field">
                <button class="button" type="submit">
                    Save
                </button>
            </div>
        </form>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import IProject from "@/interfaces/IProject";
import { ADD_PROJECT, EDIT_PROJECT, NOTIFY } from "@/store/constants";
import { NotificationType } from "@/interfaces/INotification";

export default defineComponent({
    name: 'ProjectForm',
    props: {
        id: {
            type: String
        }
    },
    mounted() {
        if (this.id) {
            const project = this.store.state.projects.find(project => project.id == this.id);
            this.projectName = project?.name || '';
        }
    },
    data() {
        return {
            projectName: ''
        }
    },
    methods: {
        save() {
            if (this.id) {
                this.store.commit(EDIT_PROJECT, {
                    id: this.id,
                    name: this.projectName
                } as IProject);
            } else {
                this.store.commit(ADD_PROJECT, this.projectName);

                this.store.commit(NOTIFY, {
                    id: new Date().getTime(),
                    title: 'Saved',
                    text: 'Right! New project saved with success',
                    type: NotificationType.SUCCESS
                });
            }

            this.projectName = '';
            this.$router.push('/projects');
        }
    },
    setup() {
        const store = useStore();

        return { 
            store
         }
    }
})
</script>
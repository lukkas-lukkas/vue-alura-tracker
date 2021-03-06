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
import { ADD_PROJECT, EDIT_PROJECT } from "@/store/constants";
import { NotificationType } from "@/interfaces/INotification";
import useNotifier from "@/hooks/notifier";

export default defineComponent({
    name: 'ProjectForm',
    props: {
        id: {
            type: String
        }
    },
    mounted() {
        if (this.id) {
            const project = this.store.state.project.projects.find(project => project.id == this.id);
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
                this.store.dispatch(EDIT_PROJECT, {
                    id: this.id,
                    name: this.projectName
                } as IProject).then(() => {
                    this.notifier.notify(
                        'Changed',
                        'Right! This project was changed',
                        NotificationType.SUCCESS
                    );
                    
                    this.projectName = '';
                    this.$router.push('/projects');
                })
            } else {
                this.store.dispatch(ADD_PROJECT, this.projectName)
                    .then(() => {
                        this.notifier.notify(
                            'Saved',
                            'Right! New project saved with success',
                            NotificationType.SUCCESS
                        );
                        this.projectName = '';
                        this.$router.push('/projects');
                    });
            }
        }
    },
    setup() {
        const notifier = useNotifier();
        const store = useStore();

        return { 
            store,
            notifier
         }
    }
})
</script>
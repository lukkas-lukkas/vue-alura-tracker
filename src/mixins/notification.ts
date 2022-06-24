// Changed to hook

import { NotificationType } from "@/interfaces/INotification";
import { store } from "@/store";
import { NOTIFY } from "@/store/constants";

export const mixinNotification = {
    methods: {
        notify(title: string, text: string, type: NotificationType) {
            store.commit(NOTIFY, {
                title: title,
                text: text,
                type: type
            });
        }
    }
}
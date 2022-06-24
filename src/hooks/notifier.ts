import { NotificationType } from "@/interfaces/INotification"
import { store } from "@/store";
import { NOTIFY } from "@/store/constants";

type Notifier = {
    notify: (title: string, text: string, type: NotificationType) => void
}

export default () : Notifier => {
    const notify = (title: string, text: string, type: NotificationType): void => {
        store.commit(NOTIFY, {
            title: title,
            text: text,
            type: type
        })
    }

    return {
        notify
    }
}

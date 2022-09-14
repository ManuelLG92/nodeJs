import EventEmitter from "events";
import {UserEvent} from "../../../User/Application/Service/UserEvent";

export class AppEventEmitter {
    private static emitter: EventEmitter;

    constructor() {
    }

    static getInstance = () => {
        if (!AppEventEmitter.emitter) {
            AppEventEmitter.emitter = new EventEmitter();
        }
        return AppEventEmitter.emitter;
    }

    static emit = (pattern: string, message: Record<string, unknown>) => {
        AppEventEmitter.getInstance().emit(pattern, message);
    }

    static initListeners() {
        this.getInstance()
        new UserEvent();
    }
}
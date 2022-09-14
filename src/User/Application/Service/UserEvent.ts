import {AppEventEmitter} from "../../../Shared/Infrastructure/Event/AppEventEmitter";

export class UserEvent {

    constructor() {
    this.initializeEventListeners();
    }
    private initializeEventListeners(): void {
        AppEventEmitter.getInstance().on('testing', (e) => {
           console.log('received', e)
        });
    }
}
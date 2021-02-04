import { ServiceCommunicationType } from '@models';
import { Subject, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ChatService {
    public chatSubject = new Subject<{
        requestType: ServiceCommunicationType;
        payload?: any;
    }>();

    public isOpen = new BehaviorSubject<boolean>(false);
    public userSearch = new BehaviorSubject<boolean>(false);
    public isExpand = new BehaviorSubject<boolean>(false);

    constructor() {}

    public showChatPanel() {
        this.chatSubject.next({
            requestType: ServiceCommunicationType.SHOW_CHAT,
        });
    }
    public closeChatPanel() {
        this.chatSubject.next({
            requestType: ServiceCommunicationType.CLOSE_CHAT,
        });
    }

    public openChatThread() {
        this.chatSubject.next({
            requestType: ServiceCommunicationType.OPEN_THREAD,
        });
    }

    public toggle() {
        this.chatSubject.next({
            requestType: ServiceCommunicationType.TOGGLE,
        });
    }
}

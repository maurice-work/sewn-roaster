import { map } from 'rxjs/operators';
import { OrderChatService } from './order-chat.service';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class OrderChatThreadResolver implements Resolve<any> {
    constructor(private orderChatService: OrderChatService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.orderChatService.getOrderThreadListByRO(route?.params?.orderId).pipe(
            map((res: any) => {
                if (res.success && res.result) {
                    return res.result;
                } else {
                    throw new Error('Api error');
                }
            }),
        );
    }
}

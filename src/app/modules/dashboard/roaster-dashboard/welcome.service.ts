import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WelcomeService {
  disputes: any = new BehaviorSubject(null);
  disputes$: any = this.disputes.asObservable();

  sales: any = new BehaviorSubject(null);
  sales$: any = this.sales.asObservable();

  sourcing: any = new BehaviorSubject(null);
  sourcing$: any = this.sourcing.asObservable();

  stock: any = new BehaviorSubject(null);
  stock$: any = this.stock.asObservable();

  varieties: any = new BehaviorSubject(null);
  varieties$: any = this.varieties.asObservable();

  estates: any = new BehaviorSubject(null);
  estates$: any = this.estates.asObservable();

  reviewsSummary: any = new BehaviorSubject(null);
  reviewsSummary$: any = this.reviewsSummary.asObservable();

  recentActivities: any = new BehaviorSubject(null);
  recentActivities$: any = this.recentActivities.asObservable();

  orders: any = new BehaviorSubject(null);
  orders$: any = this.orders.asObservable();
}

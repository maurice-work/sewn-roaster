import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GlobalsService } from 'src/services/globals.service';
import { WelcomeService } from '../welcome.service';

@Component({
  selector: 'app-dashboard-variety',
  templateUrl: './dashboard-variety.component.html',
  styleUrls: ['./dashboard-variety.component.scss'],
})
export class DashboardVarietyComponent implements OnInit, OnDestroy {
  public tooltip: any = {
    enable: true,
    format: '${point.x} : <b>${point.y}t</b>',
  };
  public chartData: any[] = [];
  public legendSettings: any = {
    visible: true,
    position: 'Bottom',
  };

  stock: any;
  stockSub: Subscription;
  orders: any[] = [];
  ordersSub: Subscription;

  constructor(public globals: GlobalsService, private welcomeSrv: WelcomeService) {}

  ngOnInit(): void {
    this.stockSub = this.welcomeSrv.stock$.subscribe((res: any) => {
      this.stock = res;
      if (this.stock) {
        this.makeChartData();
      }
    });
    this.ordersSub = this.welcomeSrv.orders$.subscribe((res: any) => {
      this.orders = res;
    });
  }

  ngOnDestroy() {
    this.stockSub.unsubscribe();
    this.ordersSub.unsubscribe();
  }

  makeChartData() {
    const tempData = [];
    this.stock.stock_stats.forEach((element) => {
      tempData.push({
        x: element.cup_score,
        y: element.available_quantity.toFixed(0),
        text: `${element.cup_score}: ${element.available_quantity.toFixed(0)}t`,
      });
    });
    this.chartData = tempData;
  }
}

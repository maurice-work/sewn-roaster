// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';

import { DataTablesModule } from 'angular-datatables';
import { RatingModule } from 'ng-starrating';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EstateOrdersComponent } from './estate-orders/estate-orders.component';
import { MyordersComponent } from './myorders/myorders.component';
import { BookedDocumentsComponent } from './order-booked/booked-documents/booked-documents.component';
import { BookedGradeInfoComponent } from './order-booked/booked-grade-info/booked-grade-info.component';
import { BookedOrderDetailsComponent } from './order-booked/booked-order-details/booked-order-details.component';
import { OrderBookedComponent } from './order-booked/order-booked.component';
import { OrderPrebookComponent } from './order-prebook/order-prebook.component';
import { PrebookConfirmOrderComponent } from './order-prebook/prebook-confirm-order/prebook-confirm-order.component';
import { PrebookDocumentsComponent } from './order-prebook/prebook-documents/prebook-documents.component';
import { PrebookGradeInfoComponent } from './order-prebook/prebook-grade-info/prebook-grade-info.component';
import { PrebookOrderDetailsComponent } from './order-prebook/prebook-order-details/prebook-order-details.component';
import { ConfirmOrderComponent } from './order-sample/confirm-order/confirm-order.component';
import { GradeInfoComponent } from './order-sample/grade-info/grade-info.component';
import { OrderDetailsComponent } from './order-sample/order-details/order-details.component';
import { OrderSampleComponent } from './order-sample/order-sample.component';
import { OrdermanagementRoutingModule } from './ordermanagement-routing.module';
import { OrdermanagementComponent } from './ordermanagement.component';
import { OrderSupportComponent } from './dispute-system/order-support/order-support.component';
import { OrderSupportFaqsComponent } from './dispute-system/order-support-faqs/order-support-faqs.component';
import { RaiseTicketFormComponent } from './dispute-system/raise-ticket-form/raise-ticket-form.component';
import { RaisedTicketComponent } from './dispute-system/raised-ticket/raised-ticket.component';
import { SelectAnOrderComponent } from './dispute-system/select-an-order/select-an-order.component';
import { ReviewRatingsComponent } from './review-ratings/review-ratings.component';
import { RatingComponent } from './rating/rating.component';
import { MicroRoasterComponent } from './dispute-system/micro-roaster/micro-roaster.component';
import { HorecaComponent } from './dispute-system/horeca/horeca.component';
import { ChartAllModule, AccumulationChartAllModule, RangeNavigatorAllModule } from '@syncfusion/ej2-angular-charts';

import { EstateComponent } from './dispute-system/estate/estate.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FacilitatorOrdersComponent } from './facilitator-orders/facilitator-orders.component';
import { RoasterOrdersComponent } from './roaster-orders/roaster-orders.component';
import { OrderChatComponent } from './order-sample/order-chat/order-chat.component';
import { PreOrderChatComponent } from './order-prebook/pre-order-chat/pre-order-chat.component';
import { BookOrderChatComponent } from './order-booked/book-order-chat/book-order-chat.component';
import { OrdersComponent } from './myorders/orders/orders.component';
import { RequestsComponent } from './myorders/requests/requests.component';
import { HorecaOrdersComponent } from './e-commerce-order/horeca-orders/horeca-orders.component';
import { HorecaOrderDetailsComponent } from './e-commerce-order/horeca-order-details/horeca-order-details.component';
import { HorecaOrderConfirmComponent } from './e-commerce-order/horeca-order-confirm/horeca-order-confirm.component';
import { EstateInfoComponent } from './e-commerce-order/horeca-order-details/estate-info/estate-info.component';
import { DetailsOrderComponent } from './e-commerce-order/horeca-order-details/details-order/details-order.component';
import { HorecaSubscriptionConfirmComponent } from './e-commerce-order/horeca-subscription-confirm/horeca-subscription-confirm.component';
import { HorecaSubscriptionDetailsComponent } from './e-commerce-order/horeca-subscription-details/horeca-subscription-details.component';
import { DetailsSubscriptionComponent } from './e-commerce-order/horeca-subscription-details/details-subscription/details-subscription.component';
import { SubscriptionEsatateInfoComponent } from './e-commerce-order/horeca-subscription-details/subscription-esatate-info/subscription-esatate-info.component';
import { HorecaPreviousSubscriptionComponent } from './e-commerce-order/horeca-previous-subscription/horeca-previous-subscription.component';
import { PreviousSubscriptionComponent } from './e-commerce-order/horeca-previous-subscription/previous-subscription/previous-subscription.component';
import { PreviousInfoComponent } from './e-commerce-order/horeca-previous-subscription/previous-info/previous-info.component';
import { MicroOrderBookedComponent } from './microroaster-orders/micro-order-booked/micro-order-booked.component';
import { BookedDetailsComponent } from './microroaster-orders/micro-order-booked/booked-details/booked-details.component';
import { BookedNotesComponent } from './microroaster-orders/micro-order-booked/booked-notes/booked-notes.component';
import { MicroOrderSampleComponent } from './microroaster-orders/micro-order-sample/micro-order-sample.component';
import { SampleDetailsComponent } from './microroaster-orders/micro-order-sample/sample-details/sample-details.component';
import { SampleNotesComponent } from './microroaster-orders/micro-order-sample/sample-notes/sample-notes.component';
import { SampleOrderConfirmationComponent } from './microroaster-orders/micro-order-sample/sample-order-confirmation/sample-order-confirmation.component';
import { BookedOrderConfirmationComponent } from './microroaster-orders/micro-order-booked/booked-order-confirmation/booked-order-confirmation.component';
import { MrOrdersComponent } from './microroaster-orders/mr-orders/mr-orders.component';
import { OrdersTableComponent } from './microroaster-orders/mr-orders/orders-table/orders-table.component';
import { RequestsTableComponent } from './microroaster-orders/mr-orders/requests-table/requests-table.component';
import { MrRequestDetailsComponent } from './microroaster-orders/mr-request-details/mr-request-details.component';
// import { EmptyTableComponent } from '../error-module/empty-table/empty-table.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BookedShippingComponent } from './order-booked/booked-shipping/booked-shipping.component';
import { AssignUserComponent } from './assign-user/assign-user.component';

@NgModule({
    declarations: [
        OrdermanagementComponent,
        MyordersComponent,
        OrderSampleComponent,
        OrderDetailsComponent,
        EstateOrdersComponent,
        GradeInfoComponent,
        OrderPrebookComponent,
        ConfirmOrderComponent,
        PrebookGradeInfoComponent,
        PrebookDocumentsComponent,
        PrebookOrderDetailsComponent,
        OrderBookedComponent,
        BookedOrderDetailsComponent,
        BookedGradeInfoComponent,
        BookedDocumentsComponent,
        PrebookConfirmOrderComponent,
        OrderSupportComponent,
        OrderSupportFaqsComponent,
        RaiseTicketFormComponent,
        RaisedTicketComponent,
        SelectAnOrderComponent,
        ReviewRatingsComponent,
        RatingComponent,
        MicroRoasterComponent,
        HorecaComponent,
        EstateComponent,
        FacilitatorOrdersComponent,
        RoasterOrdersComponent,
        OrderChatComponent,
        PreOrderChatComponent,
        BookOrderChatComponent,
        OrdersComponent,
        RequestsComponent,
        HorecaOrdersComponent,
        HorecaOrderDetailsComponent,
        HorecaOrderConfirmComponent,
        EstateInfoComponent,
        DetailsOrderComponent,
        HorecaSubscriptionConfirmComponent,
        HorecaSubscriptionDetailsComponent,
        DetailsSubscriptionComponent,
        SubscriptionEsatateInfoComponent,
        HorecaPreviousSubscriptionComponent,
        PreviousSubscriptionComponent,
        PreviousInfoComponent,
        MicroOrderBookedComponent,
        BookedDetailsComponent,
        BookedNotesComponent,
        MicroOrderSampleComponent,
        SampleDetailsComponent,
        SampleNotesComponent,
        SampleOrderConfirmationComponent,
        BookedOrderConfirmationComponent,
        MrOrdersComponent,
        OrdersTableComponent,
        RequestsTableComponent,
        MrRequestDetailsComponent,
        BookedShippingComponent,
        AssignUserComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        OrdermanagementRoutingModule,
        DataTablesModule,
        Ng2SearchPipeModule,
        FormsModule,
        RatingModule,
        MatBottomSheetModule,
        MatTooltipModule,
        AutoCompleteModule,
        ChartAllModule,
        AccumulationChartAllModule,
        RangeNavigatorAllModule,
    ],
    exports: [],
})
export class OrdermanagementModule {}

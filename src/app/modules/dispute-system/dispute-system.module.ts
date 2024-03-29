import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderChatComponent } from './order-chat/order-chat.component';
import { AssignUserComponent } from './assign-user/assign-user.component';
import { OrderSupportComponent } from './order-support/order-support.component';
import { RaisedTicketsComponent } from './raised-tickets/raised-tickets.component';
import { FaqQuestionComponent } from './faq-question/faq-question.component';
import { RaiseTicketComponent } from './raise-ticket/raise-ticket.component';
import { SelectOrderComponent } from './select-order/select-order.component';
import { SharedModule } from '@shared';
import { DisputeSystemRoutingModule } from './dispute-routing.module';
import { DisputeComponent } from './dispute/dispute.component';
import { AccordionModule } from 'primeng/accordion';
import { SewnOrderChatComponent } from './sewn-order-chat/sewn-order-chat.component';

@NgModule({
    declarations: [
        OrderChatComponent,
        AssignUserComponent,
        OrderSupportComponent,
        RaisedTicketsComponent,
        FaqQuestionComponent,
        RaiseTicketComponent,
        SelectOrderComponent,
        DisputeComponent,
        SewnOrderChatComponent,
    ],
    imports: [CommonModule, SharedModule, DisputeSystemRoutingModule, AccordionModule],
})
export class DisputeSystemModule {}

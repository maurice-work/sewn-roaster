import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../error-module/page-not-found/page-not-found.component';
import { AuthGuard } from '../guards/auth.guard';
import { AssignUserComponent } from './assign-user/assign-user.component';
import { DisputeComponent } from './dispute/dispute.component';
import { OrderChatComponent } from './order-chat/order-chat.component';
const routes: Routes = [
    {
        path: '',
        component: DisputeComponent,
        children: [
            {
                path: 'order-chat/:chatType/:orderId',
                component: OrderChatComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'assign-user',
                component: AssignUserComponent,
                canActivate: [AuthGuard],
            },
            {
                path: '',
                redirectTo: 'order-chat',
                pathMatch: 'full',
            },
            {
                path: '**',
                component: PageNotFoundComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PeopleRoutingModule {}

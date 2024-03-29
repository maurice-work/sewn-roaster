import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoastedCoffeeBatchComponent } from './roasted-coffee-batch/roasted-coffee-batch.component';
import { AuthGuard } from '@app/guards/auth.guard';
import { RoastedCoffeeBatchesComponent } from './roasted-coffee-batches/roasted-coffee-batches.component';
import { NewRoastedBatchComponent } from './new-roasted-batch/new-roasted-batch.component';
import { RoastingProfilesComponent } from './roasting-profiles/roasting-profiles.component';
import { CreateRoastingProfileComponent } from './create-roasting-profile/create-roasting-profile.component';
import { SelectOrderTableComponent } from './select-order-table/select-order-table.component';

const routes: Routes = [
    {
        path: '',
        component: RoastedCoffeeBatchComponent,
        children: [
            {
                path: 'roasted-coffee-batchs',
                component: RoastedCoffeeBatchesComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'new-roasted-batch',
                component: NewRoastedBatchComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'roasting-profile',
                component: RoastingProfilesComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'create-roasting-profile',
                component: CreateRoastingProfileComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'select-order-list',
                component: SelectOrderTableComponent,
                canActivate: [AuthGuard],
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RoastedCoffeeBatchRoutingModule {}

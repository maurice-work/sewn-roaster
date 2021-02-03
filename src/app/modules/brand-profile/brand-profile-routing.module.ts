import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrandProfileComponent } from './brand-profile.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LearnComponent } from './learn/learn.component';
import { SustainabilityComponent } from './sustainability/sustainability.component';
import { VisitUsComponent } from './visit-us/visit-us.component';

const routes: Routes = [
    {
        path: '',
        component: BrandProfileComponent,
    },
    {
        path: 'home-page',
        component: HomePageComponent,
    },
    {
        path: 'sustainability',
        component: SustainabilityComponent,
    },
    {
        path: 'visit-us',
        component: VisitUsComponent,
    },
    {
        path: 'sustainability',
        component: SustainabilityComponent,
    },
    {
        path: 'learn',
        component: LearnComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BrandProfileRoutingModule {}
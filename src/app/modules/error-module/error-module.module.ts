import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ErrorModuleRoutingModule } from './error-module-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InternalServerErrorComponent } from './internal-server-error/internal-server-error.component';
import { NoInternetConnectionComponent } from './no-internet-connection/no-internet-connection.component';
import { EmptyTableComponent } from './empty-table/empty-table.component';

@NgModule({
    declarations: [
        PageNotFoundComponent,
        InternalServerErrorComponent,
        NoInternetConnectionComponent,
        EmptyTableComponent,
    ],
    imports: [CommonModule, ErrorModuleRoutingModule, RouterModule],
    exports: [EmptyTableComponent],
})
export class ErrorModuleModule {}

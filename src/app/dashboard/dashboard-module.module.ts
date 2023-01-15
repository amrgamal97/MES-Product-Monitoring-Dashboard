import { NgApexchartsModule } from 'ng-apexcharts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { DashboardModuleRoutingModule } from './dashboard-module-routing.module';
import { FunctionsComponent } from './functions/functions.component';
import { RouteComponent } from './route/route.component';
import { JobOrderComponent } from './job-order/job-order.component';

@NgModule({
  declarations: [
    FunctionsComponent,
    RouteComponent,
    RouteComponent,
    JobOrderComponent,
  ],
  imports: [
    CommonModule,
    DashboardModuleRoutingModule,
    MatTableModule,
    NgApexchartsModule,
  ],
  exports: [FunctionsComponent, RouteComponent, JobOrderComponent],
})
export class DashboardModuleModule {}

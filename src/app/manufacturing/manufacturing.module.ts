import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManufacturingRoutingModule } from './manufacturing-routing.module';
import { JobOrderComponent } from './job-order/job-order.component';
import { RoutesComponent } from './routes/routes.component';
import { ProcessComponent } from './process/process.component';
import { OutputComponent } from './output/output.component';


@NgModule({
  declarations: [
    JobOrderComponent,
    RoutesComponent,
    ProcessComponent,
    OutputComponent
  ],
  imports: [
    CommonModule,
    ManufacturingRoutingModule
  ]
})
export class ManufacturingModule { }

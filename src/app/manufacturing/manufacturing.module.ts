import { ProcessListComponent } from './process/process-list/process-list.component';
import { RouteListComponent } from './routes/route-list/route-list.component';
import { RouteChartComponent } from './routes/route-chart/route-chart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManufacturingRoutingModule } from './manufacturing-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatTabContent, MatTabsModule } from '@angular/material/tabs';
import { ListComponent } from './job-order/list/list.component';
import { ChartComponent } from './job-order/chart/chart.component';
import { FlowChartComponent } from './flow-chart/flow-chart.component';
import { ProcessChartComponent } from './process/process-chart/process-chart.component';

@NgModule({
  declarations: [
    ListComponent,
    RouteChartComponent,
    FlowChartComponent,
    RouteListComponent,
    ChartComponent,
    ProcessListComponent,
    ProcessChartComponent,
  ],
  imports: [
    CommonModule,
    ManufacturingRoutingModule,
    NgApexchartsModule,
    MatTableModule,
    MatButtonModule,
    MatTabsModule,
  ],
  exports: [
    ProcessChartComponent,
    ManufacturingRoutingModule,
    RouteChartComponent,
    RouteListComponent,
    NgApexchartsModule,
    MatTableModule,
    ChartComponent,
    ProcessListComponent,
    MatButtonModule,
    MatTabsModule,
    ListComponent,
    FlowChartComponent,
    RouteChartComponent,
    // ProcessChartComponent,
  ],
})
export class ManufacturingModule {}

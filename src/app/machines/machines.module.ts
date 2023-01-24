import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { MachinesRoutingModule } from './machines-routing.module';
import { PropertiesComponent } from './properties/properties.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { StatisticsComponent } from './statistics/statistics.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatTabsModule } from '@angular/material/tabs';
import { OvertimeChartComponent } from './statistics/overtime-chart/overtime-chart.component';
import { DowntimeChartComponent } from './statistics/downtime-chart/downtime-chart.component';
import { GoodvsscrapChartComponent } from './statistics/goodvsscrap-chart/goodvsscrap-chart.component';
import { MatSliderModule } from '@angular/material/slider';
import { HistoryComponent } from './history/history.component';
import { MatTableModule } from '@angular/material/table';
import { ChartComponent } from './history/chart/chart.component';

@NgModule({
  declarations: [
    PropertiesComponent,
    StatisticsComponent,
    OvertimeChartComponent,
    DowntimeChartComponent,
    GoodvsscrapChartComponent,
    HistoryComponent,
    ChartComponent,
  ],
  imports: [
    CommonModule,
    MachinesRoutingModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatProgressBarModule,
    MatSelectModule,
    NgApexchartsModule,
    MatTabsModule,
    MatSliderModule,
    FormsModule,
    MatTableModule,
  ],
  exports: [PropertiesComponent, StatisticsComponent, HistoryComponent],
})
export class MachinesModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { MachinesRoutingModule } from './machines-routing.module';
import { PropertiesComponent } from './properties/properties.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [PropertiesComponent],
  imports: [
    CommonModule,
    MachinesRoutingModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatProgressBarModule,
    MatSelectModule,
  ],
  exports: [PropertiesComponent],
})
export class MachinesModule {}

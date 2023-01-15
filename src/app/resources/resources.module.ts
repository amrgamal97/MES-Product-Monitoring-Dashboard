import { MaterialProfileWeightComponent } from './weight/material-profile-weight/material-profile-weight.component';
import { MaterialListWeightComponent } from './weight/material-list-weight/material-list-weight.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialProfileComponent } from './material-profile/material-profile.component';
import { MaterialListComponent } from './material-list/material-list.component';
import {
  MatProgressBarModule,
  MAT_PROGRESS_BAR_DEFAULT_OPTIONS,
} from '@angular/material/progress-bar';
import { NgModule, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourcesRoutingModule } from './resources-routing.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatExpansionModule } from '@angular/material/expansion';
import { MaterialProfileSupplyComponent } from './supply/material-profile/material-profile.component';
import { MaterialListSupplyComponent } from './supply/material-list/material-list.component';
import { MaterialListConsumComponent } from './consumption/material-list-consum/material-list-consum.component';
import { MaterialProfileConsumComponent } from './consumption/material-profile-consum/material-profile-consum.component';
import { MaterialProfileScrapComponent } from './scrap/material-profile-scrap/material-profile-scrap.component';
import { MaterialListScrapComponent } from './scrap/material-list-scrap/material-list-scrap.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AddNewComponent } from './add-new/add-new.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggle } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    MaterialListComponent,
    MaterialProfileComponent,
    MaterialProfileSupplyComponent,
    MaterialListSupplyComponent,
    MaterialListWeightComponent,
    MaterialProfileWeightComponent,
    MaterialListConsumComponent,
    MaterialProfileConsumComponent,
    MaterialListConsumComponent,
    MaterialProfileConsumComponent,
    MaterialProfileScrapComponent,
    MaterialListScrapComponent,
    MaterialListScrapComponent,
    MaterialProfileScrapComponent,
    AddNewComponent,
  ],
  imports: [
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatTableModule,
    MatExpansionModule,
    CommonModule,
    ResourcesRoutingModule,
    MatAutocompleteModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatToolbarModule,
    FormsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    NgApexchartsModule,
    MatDialogModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MaterialListComponent,
    MatSlideToggleModule,
    MaterialProfileComponent,
    MaterialProfileSupplyComponent,
    MaterialListSupplyComponent,
    MaterialListWeightComponent,
    MaterialProfileWeightComponent,
    MaterialListConsumComponent,
    MaterialProfileConsumComponent,
    MaterialListScrapComponent,
    MaterialProfileScrapComponent,
    MatMenuModule,
    MatDatepickerModule,
    MatFormField,
    MatNativeDateModule,
    MatTabsModule,
    MatButtonModule,
    AddNewComponent,
    MatButtonToggleModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ResourcesModule implements OnChanges {
  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }
}

import { MachinesModule } from './machines/machines.module';
import { ResourcesModule } from './resources/resources.module';
// import { MaterialProfileComponent } from './resources/material-profile/material-profile.component';
// import { MaterialListComponent } from './resources/material-list/material-list.component';
import { DashboardModuleModule } from './dashboard/dashboard-module.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CoreModule } from './interceptors/core.module';
import { SpinnerInterceptor } from './interceptors/spinner.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import {
  MatSidenavContainer,
  MatSidenavModule,
} from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from '@angular/material/core';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';

// FlexLayoutModule
import { MatCardModule } from '@angular/material/card';
import { RegisterComponent } from './auth/register/register.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { ResourcesComponent } from './resources/resources.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';
import { ManufacturingModule } from './manufacturing/manufacturing.module';
import { MachinesComponent } from './machines/machines.component';
// import { MachinesComponent } from './machines/machines.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { NotFoundComponent } from './not-found/not-found.component';

// import { SideNavComponent } from './side-nav/side-nav.component';
// import { AnimationsComponent } from './animations/animations.component';
@NgModule({
  declarations: [
    AppComponent,
    // WelcomeComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    HeaderComponent,
    // ControlMapComponent,
    SidenavComponent,
    ResourcesComponent,
    ManufacturingComponent,
    MachinesComponent,
    NotFoundComponent,
  ],
  imports: [
    // TreeNode,
    MatSliderModule,
    MatCheckboxModule,
    MatTabsModule,
    NgApexchartsModule,
    MatToolbarModule,
    MatListModule,
    FormsModule,
    MatProgressBarModule,
    MatIconModule,
    MatSidenavModule,
    MatSelectModule,
    NgxSpinnerModule.forRoot({ type: 'ball-spin-fade' }),
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    CoreModule,
    MatCardModule,
    MatGridListModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    ToastrModule.forRoot(), // ToastrModule added
    // MainRoutingModule,
    MatExpansionModule,
    DashboardModuleModule,
    ResourcesModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ManufacturingModule,
    MachinesModule,
  ],
  providers: [MatSidenavContainer],
  bootstrap: [AppComponent],
})
export class AppModule {}

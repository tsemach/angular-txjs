import { NgModule, ErrorHandler } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppMaterialModule } from '../app-material.module';
import { ServiceMenuComponent } from './service-menu/service-menu.component';
import { ApplicationService } from '../services/application.service';
import { ApplicationErrorHandler } from '../common/application-error-hadler';
import { JobsViewerComponent } from './jobs-viewer/jobs-viewer.component';
import { OverviewComponent } from './overview.component';

@NgModule({
  declarations: [
    ServiceMenuComponent,
    JobsViewerComponent,
    OverviewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,    
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule,
    AppMaterialModule,    
  ],
  providers: [
    ApplicationService,
//    { provide: ErrorHandler, useClass: ApplicationErrorHandler}    
  ],
  exports: [OverviewComponent]
})
export class AppOverviewModule{ }


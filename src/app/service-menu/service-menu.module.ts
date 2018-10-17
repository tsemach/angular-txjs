
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';

//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { AppMaterialModule } from '../app-material.module';

//import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { ServiceMenuComponent } from './service-menu.component';

const appRoutes: Routes = [
    // { path: 'forms', 'component': FormsComponent, children: [
    //     { path: 'examples', 'component': FormExamplesComponent },
    //     { path: 'services', 'component': FormsServicesComponent }
    // ] },
  ];

@NgModule({
  declarations: [
    ServiceMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),    
    // MDBBootstrapModule.forRoot(),  
    //BrowserAnimationsModule,
    // NgbModule,
    //AppMaterialModule,

    //BrowserAnimationsModule,
  ],
  providers: [],
  exports: [ServiceMenuComponent]
})
export class AppServiceMenuModule { }

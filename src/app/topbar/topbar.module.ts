
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from '../app-material.module';

import { TopbarNavComponent } from '../topbar/topbar-nav/topbar-nav.component';
import { TobarDialogAddServiceComponent } from '../topbar/tobar-dialog-add-service/tobar-dialog-add-service.component';
import { TopbarComponent } from '../topbar/topbar.component';


const appRoutes: Routes = [
  // { path: 'http', 'component': HttpComponent , children: [
  //     { path: 'mosh', 'component': HttpMoshComponent }
  //   ]
  // }
];

@NgModule({
  declarations: [
    TopbarNavComponent,
    TobarDialogAddServiceComponent,
    TopbarComponent  
],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MDBBootstrapModule.forRoot(),  
    BrowserAnimationsModule,
    NgbModule,    
    HttpModule,
    AppMaterialModule,
  ],
  entryComponents: [
    TobarDialogAddServiceComponent
  ],
  providers: [
  ],
  exports: [
    // RouterModule, 
    // TopbarNavComponent,
    // TobarDialogAddServiceComponent,
    TopbarComponent  
  ]
})
export class AppTopbarModule { }

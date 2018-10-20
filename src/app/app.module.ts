
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatButtonModule } from '@angular/material/button';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatIconModule } from '@angular/material/icon';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatSelectModule } from '@angular/material/select';
// import { MatInputModule } from '@angular/material/input';

import { AppMaterialModule } from './app-material.module';

// import { TopbarNavComponent } from './topbar/topbar-nav/topbar-nav.component';
// import { TobarDialogAddServiceComponent } from './topbar/tobar-dialog-add-service/tobar-dialog-add-service.component';
// import { TopbarComponent } from './topbar/topbar.component';

import { AppTopbarModule } from './topbar/topbar.module';
import { AppComponent } from './app.component';
// import { ServiceMenuComponent } from './service-menu/service-menu.component';
import { AppOverviewModule } from './overview/overview.module';

@NgModule({
  declarations: [
    AppComponent,
    // TopbarNavComponent,
    // TobarDialogAddServiceComponent,
    // TopbarComponent,
     //ServiceMenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,    
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule,
    AppMaterialModule,
    AppTopbarModule,
    AppOverviewModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


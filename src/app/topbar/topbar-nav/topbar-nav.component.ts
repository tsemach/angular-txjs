import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TobarDialogAddServiceComponent } from '../tobar-dialog-add-service/tobar-dialog-add-service.component';

@Component({
  selector: 'app-topbar-nav',
  templateUrl: './topbar-nav.component.html',
  styleUrls: ['./topbar-nav.component.scss']
})
export class TopbarNavComponent implements OnInit {

  isForm = false;  

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openAddServiceDialog() {
    console.log("openSimpleDialog click");

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    // dialogConfig.width = "100%";
    // dialogConfig.height = "100%";

    this.dialog.open(TobarDialogAddServiceComponent, dialogConfig)
      .afterClosed()
      .subscribe(result => {
        console.log(result);
      });
  }
  toggle() {
    this.isForm = !this.isForm;
  }  
  
}

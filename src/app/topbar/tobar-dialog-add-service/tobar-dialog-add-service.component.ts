import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-tobar-dialog-add-service',
  templateUrl: './tobar-dialog-add-service.component.html',
  styleUrls: ['./tobar-dialog-add-service.component.scss']
})
export class TobarDialogAddServiceComponent implements OnInit {

  description = 'Add Service';

  name = '';
  host = '';
  port = '';

  constructor(private dialogRef: MatDialogRef<TobarDialogAddServiceComponent>) { }

  ngOnInit() {
  }

  save() {
    this.dialogRef.close({name: this.name, host: this.host, port: +this.port});
  }

  cancel() {
    this.dialogRef.close();
  }
}

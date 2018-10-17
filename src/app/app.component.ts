import { Component, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HostListener } from '@angular/core';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NgbAccordionConfig] 
})
export class AppComponent {
  title = 'angular-txjs';
  
  services = ['sdvsdv'];

  constructor(private config: NgbAccordionConfig) {
    if (this.services.length == 0) {
      config.type = 'light';    
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HostListener } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { ApplicationService } from '../../services/application.service';

@Component({
  selector: 'app-service-menu',
  templateUrl: './service-menu.component.html',
  styleUrls: ['./service-menu.component.scss'],
  providers: [NgbAccordionConfig] 
})
export class ServiceMenuComponent implements OnInit {
  services = [];
  services2 = [
      {          
        name: 'service-1', 
        jobs: [
          {
            name: 'job-1',                
            uuid: '1234',
            components: [
              {
                name: 'AWS::CREATE'
              },
              {
                name: 'AWS::DELETE'
              }
            ]
          },
          {
            name: 'job-2', 
            uuid: '5678',
            components: [
              {
                name: 'GOOGLE::CREATE'
              },
              {
                name: 'GOOGLE::DELETE'
              }
            ]
          }
        ]
      },
      {          
        name: 'service-2', 
        jobs: [
          {
            name: 'job-1',                
            uuid: '1234',
            components: [
              {
                name: 'AWS::CREATE'
              },
              {
                name: 'AWS::DELETE'
              }
            ]
          },
          {
            name: 'job-2', 
            uuid: '5678',
            components: [
              {
                name: 'GOOGLE::CREATE'
              },
              {
                name: 'GOOGLE::DELETE'
              }
            ]
          }
        ]
      }
    ];

  activeIds = "service-1,service-2"
  constructor(private http: ApplicationService, private config: NgbAccordionConfig) {
    this.getServices();
  }
  
  getServices() {
    this.http.getAll('services')
       .subscribe((services) => {
         this.services = services['services'];

         console.log(this.services);
        //  this.services['services'].forEach(element => {
        //    console.log('element: ', element);          
        //  });
       });          
  }

  ngOnInit() {
  }

}

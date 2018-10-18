import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { GRUDService } from './grud.service';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService extends GRUDService {
  
  constructor(http: Http) { 
    super('http://localhost:3000/', http);
  }

}
  
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { ApplicationError } from '../common/application.error';
import { ApplicationNotFoundError } from '../common/application-not-found.error';
import { ApplicationBadInputError } from '../common/application-bad-request.error';

@Injectable({
  providedIn: 'root'
})
export class GRUDService {    

  constructor(private url: string, private http: Http) { }

  getAll(part = '') {    
    console.log("GRUD: url = " + this.url + part);
    return this.http.get(this.url + part)
      .map(response => response.json())      
      .catch(this.handleError);
  }

  get(limit: number) {    
    return this.http.get(this.url)      
      .map(response => response.json())      
      .catch(this.handleError);
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
      .map(response => response.json())
      .catch(this.handleError);
  }

  update(resource) {    
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({isRead: true}))
      .map(response => response.json())
      .catch(this.handleError);
  }

  delete(id) {
    console.log('[http-final-data.service:deletePost] going to delete id = ' + id);
    return this.http.delete(this.url + '/' + id)    
      .map(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new ApplicationBadInputError(error.json()));
    }
  
    if (error.status === 404) {
      return Observable.throw(new ApplicationNotFoundError());
    }
    return Observable.throw(new ApplicationError(error.json()));
  }
}
  
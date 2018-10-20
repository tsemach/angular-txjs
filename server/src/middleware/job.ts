
import { toJSON } from './tojason.interface';
import { toDatabase } from './todatabase.interface';
import { Component } from './component';

class JobInterface {
    name: string;
    uuid: string;    
}

export class Job implements toJSON, toDatabase {

  private _job = new JobInterface();
  private _components = new Array<Component>();
  
  constructor(_name = '', _uuid = '') {
    this._job.name = _name;
    this._job.uuid = _uuid;
  }  

  get name() {
    return this._job.name;
  }

  addComponent(component: Component) {
    this._components.push(component);
  }

  get components() {
    return this._components;
  }

  toJSON() {
    let components = [];

    this._components.forEach((c) => { components.push(c.toJSON()); });

    return {            
        name: this._job.name,
        uuid: this._job.uuid,
        components, 
    }
  }

  static upJSON(_job) {
    let job = new Job(_job.name, _job.uuid);    

    _job.components.forEach((c) => { job.addComponent(Component.upJSON(c)); });

    return job;
  }

  toDatabase(_args = {}) {
    let data = {
      name: this._job.name, 
      type: this._job.uuid,
      createdAt: Date.now(), 
      updatedAt: Date.now()  
    };  

    return data;
  }
}


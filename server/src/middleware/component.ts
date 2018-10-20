
import { toJSON } from './tojason.interface';
import { toDatabase } from './todatabase.interface';
import { upJSON } from './upjson.interface';

class ComponentInterface {
  name: string;  
}

export class Component implements toJSON, toDatabase {
  private _component = new ComponentInterface();
  
  constructor(_name = '') {
    this._component.name = _name;
  }

  get name() {
    return this._component.name;
  }

  toJSON() {
    let component = {};
    
    Object.assign(component, this._component);
    
    return component;
  }

  static upJSON(_component) {
    return new Component(_component.name);
  }

  toDatabase(_args: {}) {
    let data = {      
      name: this._component.name,      
    }

    return data;
  }
}

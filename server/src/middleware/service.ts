import { upJSON } from './upjson.interface';
import { toJSON } from './tojason.interface';
import { toDatabase } from './todatabase.interface';

import { Job } from './job';

class ServiceInterface {    
    name: string;
    uuid: string;
}

export class Service implements toJSON, toDatabase { 
    private _service = new ServiceInterface();
    private _jobs: Job[] = new Array<Job>();

    constructor(_name: string = '', _uuid: '') {
        this._service.name = _name;
        this._service.uuid = _uuid;
    }

    get name() {
        return this._service.name;
    }

    get uuid() {
        return this._service.uuid;
    }
    
    addJob(job: Job) {
        this._jobs.push(job);
    }

    get jobs() {
        return this._jobs;
    }

    set jobs(jobs: Array<Job>) {
        this._jobs = jobs;
    }

    static upJSON(_service) {
        let service = new Service(_service.name, _service.uuid);

        _service.jobs.forEach((j) => { service.addJob(Job.upJSON(j)); });

        return service;
    }

    toJSON() {
        let jobs = [];

        this._jobs.forEach((j) => { jobs.push(j.toJSON()); });

        return {            
            name: this._service.name,
            uuid: this._service.uuid,
            jobs
        }
    }

    toDatabase(_args = {}) {
        return {            
            name: this._service.name,
            uuid: this._service.uuid,
            createdAt: Date.now(),
            updatedAt: Date.now()
        };
    }    

    print() {
        return "I am service - " + this._service.name;
    }
}

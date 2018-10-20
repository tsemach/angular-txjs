
import createLogger from 'logging';
const logger = createLogger('Job-Continue-Test');

import 'mocha';
import {assert, expect} from 'chai';

import * as short from 'short-uuid';
import { Job } from '../../src/middleware/job';
import { Service } from '../../src/middleware/service';

describe('Service Middleware Test', () => {

  /**
   */
  it('service.middleware.ts: serialize upJSON', () => {
    logger.info('service.middleware.ts: serialize upJSON');
    
    let from = {
      name: 'Machines',
      uuid: '1234-5678',
      jobs: [
        {
          name: 'GitHubGisptCreate',
          uuid: '1234-5678',
          components: [
            {
              name: 'GITHUB::GISPT::READ'
            },
            {
              name: 'GITHUB::GISPT::WRITE'
            }
          ]            
        },
        {
          name: 'AwsMachineCreate',
          uuid: '8765-4321',
          components: [
            {
              name: 'AWS::MACHINE::CREATE'
            },
            {
              name: 'AWS::MACHINE::DELETE'
            }
          ]
        }
      ]
    };

    let service = Service.upJSON(from);    
    let after = service.toJSON();
    let jobs = service.jobs;    

    console.log('toJSON: ', JSON.stringify(service, undefined, 2));
    expect(from.name).to.equal(after['name']);
    expect(from.name).to.equal('Machines');

    expect(from.uuid).to.equal(after['uuid']);
    expect(from.uuid).to.equal('1234-5678');

    expect(from.jobs[0].name).to.equal(after['jobs'][0].name);
    expect(from.jobs[0].name).to.equal('GitHubGisptCreate');
    expect(from.jobs[0].uuid).to.equal(after['jobs'][0].uuid);
    expect(from.jobs[0].uuid).to.equal('1234-5678');
    expect(from.jobs[0].components[0].name).to.equal(after['jobs'][0].components[0]['name']);
    expect(from.jobs[0].components[0].name).to.equal('GITHUB::GISPT::READ');
    expect(from.jobs[0].components[1].name).to.equal(after['jobs'][0].components[1]['name']);
    expect(from.jobs[0].components[1].name).to.equal('GITHUB::GISPT::WRITE');

    expect(from.jobs[1].name).to.equal(after['jobs'][1].name);
    expect(from.jobs[1].name).to.equal('AwsMachineCreate');
    expect(from.jobs[1].uuid).to.equal(after['jobs'][1].uuid);
    expect(from.jobs[1].uuid).to.equal('8765-4321');
    expect(from.jobs[1].components[0].name).to.equal(after['jobs'][1].components[0]['name']);
    expect(from.jobs[1].components[0].name).to.equal('AWS::MACHINE::CREATE');
    expect(from.jobs[1].components[1].name).to.equal(after['jobs'][1].components[1]['name']);
    expect(from.jobs[1].components[1].name).to.equal('AWS::MACHINE::DELETE');

  });

});
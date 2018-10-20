
import createLogger from 'logging';
const logger = createLogger('Job-Continue-Test');

import 'mocha';
import {assert, expect} from 'chai';

import * as short from 'short-uuid';
import { Job } from '../../src/middleware/job';

describe('Job Middleware Test', () => {

  /**
   */
  it('job.middleware.ts: serialize upJSON', () => {
    logger.info('job.middleware.ts: serialize upJSON');
    
    let from = {
      name: 'GitHubDisptCreate',
      uuid: '1234-5678',
      components: [
        {
          name: 'GITHUB::GISPT::READ'
        },
        {
          name: 'GITHUB::GISPT::WRITE'
        }
      ]
    };

    let job = Job.upJSON(from);    
    let after = job.toJSON();
    let components = job.components;

    console.log('toJSON: ', JSON.stringify(job.toJSON(), undefined, 2));
    expect(from.name).to.equal(after['name']);
    expect('GitHubDisptCreate').to.equal(job.name);

    expect(from.components[0].name).to.equal(components[0].name);
    expect(from.components[1].name).to.equal(components[1].name);
    expect(from.components[0].name).to.equal('GITHUB::GISPT::READ');
    expect(from.components[1].name).to.equal('GITHUB::GISPT::WRITE');  

  });

});
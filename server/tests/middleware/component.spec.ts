
import createLogger from 'logging';
const logger = createLogger('Job-Continue-Test');

import 'mocha';
import {assert, expect} from 'chai';

import * as short from 'short-uuid';
import { Component } from '../../src/middleware/component';

describe('Component Middleware Test', () => {

  /**
   */
  it('component.middleware.ts: serialize toJSON, upJSON', () => {
    logger.info('component.middleware.ts: serialize toJSON, upJSON');
    
    let from;
    let after;

    from = {
      name: "GITHUB::GISPT::READ",
    };
    after = Component.upJSON(from).toJSON();
    expect(from.name).to.equal(after['name']);
    expect('GITHUB::GISPT::WRITE').to.not.equal(after['name']);
  });

});
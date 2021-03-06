import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

// import web_server from '../services/web_server';
// import management from '../services/management';
// import angular from '../services/angular';

export class Application {
  private static _instance: Application = null;

  public express: express.Application;

  // run configuration methods on the express instance.
  private constructor() {
    console.log('Application:construcot: is called');
    this.express = express();
    this.middleware();
  }

  public static get instance(): Application {    
    if (this._instance) {       
      return this._instance;
    }
    this._instance = new this();    
    return this._instance;
  }

  // configure express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(cors());
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({extended: false}));
  }

  /**
   *
   * @param where - thed of which the service is route (regular express path)
   * @param service - a class which implement this route
   */
  register(where, service) {    
    this.express.use(where, service.add());
  }

  listen(host: string, port: number) {
    this.express.listen(port, () => {
      // success callback
      console.log(`Listening at http://${host}:${port}/`);
    });
  }
}
require('../services');

// export default // let application = new Application();

// const port: number = 3000;

// application.express.listen(port, () => {
//     // success callback;
//     console.log(`Listening at http://localhost:${port}/`);
// });


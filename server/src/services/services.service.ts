import * as express from 'express';
import { Application } from '../application/application';


export class HttpService {

  constructor() {
    Application.instance.register('/services', this);
  }

  public add(): express.Router {
    // route: /http --------------------------------------------------------------
    const router = express.Router();

    router.get('/', (req, res) => {
      // route: /service/get ...      
      console.log('http: GET data received was: ' + JSON.stringify(req.body));

      let data = {services:
        [
          {          
            name: 'service-1', 
            jobs: [
              {
                name: 'job-11',
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
                name: 'job-12', 
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
                name: 'job-21',                
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
                name: 'job-22', 
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
        ]
      };

      // set the appropriate HTTP header
      res.setHeader('Content-Type', 'application/json');
      res.json(data);
    });
    
    router.post('/', (req, res) => {
      // route: /http/post ...
      console.log('angular: POST data received was: ' + JSON.stringify(req.body));

      // set the appropriate HTTP header
      res.setHeader('Content-Type', 'application/json');

      if (0) {
        res.status(400);

        res.json({
          id: 'abcd'
        });

        return;
      }

      res.json({
        id: '1111'
      });
    });

    router.put('/put/:id', (req, res) => {
      // route: /http/post ...
      //console.log('angular: PUT got call from client put ' + req);
      console.log('angular: PUT id = ' + req.params.id);
      console.log('angular: PUT data received was: ' + JSON.stringify(req.body));

      // set the appropriate HTTP header
      res.setHeader('Content-Type', 'application/json');

      res.json(req.body);
    });

    router.delete('/delete/:id', (req, res) => {
      // route: /http/delete ...
      console.log('angular: DELETE id = ' + req.params.id);      
      console.log('angular: DELETE data received was: ' + JSON.stringify(req.body));
                    
      // set the appropriate HTTP header
      res.setHeader('Content-Type', 'application/json');      
      res.json(req.body);
    });

    return router;
  // --------------------------------------------------------------------------
  }
}

export default new HttpService();

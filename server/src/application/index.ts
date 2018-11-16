import * as dotenv from 'dotenv';
import { Application } from './application';

dotenv.config();

console.log("PORT=", process.env.PORT);

const port = process.env.PORT || 3000;
Application.instance.listen('localhost', +port);
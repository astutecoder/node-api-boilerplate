import { MongoServer } from './app/servers/db.server';
import { ExpressServer } from './app/servers/app.server';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

const app = new ExpressServer();
const db = new MongoServer(app);

db.start();

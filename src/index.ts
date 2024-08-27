import express from 'express';
import cors from 'cors';
import path from 'path';
import { router } from './root.routes';
import dotenv from 'dotenv';
import json from './middlewares/json';
import './types/global.request';

export const app = express();

app.use('/static', express.static(path.join(__dirname, '..', 'public')));
app.use(cors({ origin: '*', credentials: false }));
// Trust the proxy
app.set('trust proxy', true);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config({ path: path.join('.env') });

app.use(json);

app.use('/api', router);

let PORT = parseInt(process.env.APP_PORT || '8000');
const HOST = process.env.APP_HOST || 'localhost';
if (process.env.NODE_ENV === 'test') {
  PORT = parseInt(process.env.TEST_APP_PORT || '8000');
}

app.listen(PORT, HOST, () => {
  console.log(`Server running at ${HOST}:${PORT}`);
});

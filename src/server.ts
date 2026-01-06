import express, { type Request, type Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';

import { FRONTEND_URL } from './envConfig.js';

const app = express();

app.use(helmet());

app.use(cors({ origin: FRONTEND_URL }));

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello World!' });
});

export default app;

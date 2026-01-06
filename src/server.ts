import express, { type Request, type Response } from 'express';
import cors from 'cors';

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));
// or use cors() to allow all origins

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello World!' });
});

export default app;

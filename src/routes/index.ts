import { Request, Response } from 'express';
import { app } from '@/src/utils';

app.get('/', (_, res: Response) => {
  res.send('Hello World!');
});

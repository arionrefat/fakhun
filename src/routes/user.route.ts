import { validate } from '.';
import { router } from '../utils';
import { Response, Request } from 'express';
import { insertUserSchema } from './types';

router.post('/users', validate(insertUserSchema), async (req: Request, res: Response) => {
  const id: string = req.body.id;
});

export default router;

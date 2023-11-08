import { Router } from 'express';
import UserController from '../controllers/user.controller';
import { validate } from '../utils';
import { insertUserSchema } from '@/src/controllers/types';

const router = Router();

router.post('/register', validate(insertUserSchema), UserController.register);

export default router;

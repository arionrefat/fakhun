import { Router } from 'express';
import UserController from '../controllers/user.controller';
import { validate } from '../utils';
import { registerUserSchema } from '@/src/controllers/types';

const router = Router();

router.post('/register', validate(registerUserSchema), UserController.register);
router.get('/getall', UserController.getAll);
router.post('/delete', validate(registerUserSchema), UserController.deleteUser);

export default router;

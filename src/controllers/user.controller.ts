import { Response, Request } from 'express';
import { createUser } from '../models/user.model';
import { RegisterRequest } from './types';

const UserController = {
  register: async (req: RegisterRequest, res: Response) => {
    try {
      const userData = req.body;
      const newUser = await createUser(userData);

      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

export default UserController;

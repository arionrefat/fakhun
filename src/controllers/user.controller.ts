import { Response } from 'express';
import { createUser, allUsers } from '../models/user.model';
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
  getAll: async (_: any, res: Response) => {
    try {
      const users = await allUsers();
      if (!users.length) {
        res.status(404).json({ error: 'No users found' });
      }
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  deleteUser: async (req: any, res: Response) => {
    try {
      const userData = req.body;
      const newUser = await createUser(userData);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};

export default UserController;

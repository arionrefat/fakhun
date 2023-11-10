import { createInsertSchema } from 'drizzle-zod';
import { users } from '@/src/lib/db/schema';
import { Request } from 'express';
import { UserTypeInsert } from '@/src/models/types';

export const insertUserSchema = createInsertSchema(users);

export interface RegisterRequest extends Request {
  body: UserTypeInsert
}

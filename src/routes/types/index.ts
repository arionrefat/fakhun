import { createInsertSchema } from 'drizzle-zod';
import { users } from '@/src/lib/db/schema';

export const insertUserSchema = createInsertSchema(users);

import { InferInsertModel } from 'drizzle-orm';
import { users } from '@/src/lib/db/schema';

export type UserTypeInsert = InferInsertModel<typeof users>;

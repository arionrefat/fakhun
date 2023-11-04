import { db } from '../lib/db';
import { users } from '@/src/lib/db/schema';
import { eq } from 'drizzle-orm';
import { UserTypeInsert } from '../models/types';

export async function createUser(data: UserTypeInsert) {
  return await db.insert(users).values(data).returning();
}

export const allUsers = await db.select().from(users);

export async function deleteUser(userId: number) {
  return await db
    .delete(users)
    .where(eq(users.id, userId))
    .returning({ name: users.firstName });
}

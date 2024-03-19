import {
  boolean,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const userRoles = pgEnum("roles", ["admin", "user"]);

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
  profilePicture: text("profile_picture"),
  isActive: boolean("is_active").default(true),
  roles: userRoles("roles").default("user").notNull(),
});

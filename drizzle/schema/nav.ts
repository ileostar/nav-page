import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const navItems = pgTable('nav_items', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  desc: text('desc'),
  link: text('link').notNull(),
  icon: text('icon'),
  sort: integer('sort').default(0),
  userId: text('user_id').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

export type NavItem = typeof navItems.$inferSelect
export type NewNavItem = typeof navItems.$inferInsert

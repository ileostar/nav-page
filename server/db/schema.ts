import { integer, pgTable, real, serial, text, timestamp } from 'drizzle-orm/pg-core'

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

export const userConfigs = pgTable('user_configs', {
  id: serial('id').primaryKey(),
  userId: text('user_id').unique().notNull(),
  theme: text('theme').default('light'),
  backgroundType: text('background_type').default('color'),
  backgroundValue: text('background_value').default('#f5f5f5'),
  backgroundBlur: integer('background_blur').default(0),
  backgroundOpacity: real('background_opacity').default(1),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

export type NavItem = typeof navItems.$inferSelect
export type NewNavItem = typeof navItems.$inferInsert
export type UserConfig = typeof userConfigs.$inferSelect
export type NewUserConfig = typeof userConfigs.$inferInsert

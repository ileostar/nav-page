CREATE TABLE IF NOT EXISTS "user_configs" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"theme" text DEFAULT 'light',
	"background_type" text DEFAULT 'color',
	"background_value" text DEFAULT '#f5f5f5',
	"background_blur" integer DEFAULT 0,
	"background_opacity" real DEFAULT 1,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "user_configs_user_id_unique" UNIQUE("user_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "nav_items" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"desc" text,
	"link" text NOT NULL,
	"icon" text,
	"sort" integer DEFAULT 0,
	"user_id" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);

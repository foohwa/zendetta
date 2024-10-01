ALTER TABLE "dentists" RENAME COLUMN "name" TO "first_name";--> statement-breakpoint
ALTER TABLE "dentists" ADD COLUMN "last_name" varchar(255);--> statement-breakpoint
ALTER TABLE "dentists" ADD COLUMN "avatar_url" varchar(255);
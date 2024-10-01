CREATE TABLE IF NOT EXISTS "appointments" (
	"id" serial PRIMARY KEY NOT NULL,
	"appointment_id" varchar(255) NOT NULL,
	"dentist_id" integer NOT NULL,
	"patient_id" integer NOT NULL,
	"treatment_id" integer NOT NULL,
	"start" timestamp NOT NULL,
	"end" timestamp NOT NULL,
	"duration" integer NOT NULL,
	"status" varchar(50) NOT NULL,
	"room" varchar(50),
	"notes" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "dentists" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS "patients" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" varchar(255) NOT NULL,
	"last_name" varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS "treatments" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL
);

DROP TABLE "users";
CREATE UNIQUE INDEX IF NOT EXISTS "appointment_id_idx" ON "appointments" ("appointment_id");
DO $$ BEGIN
 ALTER TABLE "appointments" ADD CONSTRAINT "appointments_dentist_id_dentists_id_fk" FOREIGN KEY ("dentist_id") REFERENCES "dentists"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "appointments" ADD CONSTRAINT "appointments_patient_id_patients_id_fk" FOREIGN KEY ("patient_id") REFERENCES "patients"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "appointments" ADD CONSTRAINT "appointments_treatment_id_treatments_id_fk" FOREIGN KEY ("treatment_id") REFERENCES "treatments"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

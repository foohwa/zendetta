import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// Dentists table
export const dentists = pgTable("dentists", {
  id: serial("id").primaryKey(),
  firstName: varchar("first_name", { length: 255 }).notNull(),
  lastName: varchar("last_name", { length: 255 }),
  avatarUrl: varchar("avatar_url", { length: 255 }),
  // Add more dentist-specific fields as needed
});

// Patients table
export const patients = pgTable("patients", {
  id: serial("id").primaryKey(),
  firstName: varchar("first_name", { length: 255 }).notNull(),
  lastName: varchar("last_name", { length: 255 }).notNull(),
  // Add more patient-specific fields as needed
});

// Treatments table
export const treatments = pgTable("treatments", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  // Add more treatment-specific fields as needed
});

// Appointments table
export const appointments = pgTable(
  "appointments",
  {
    id: serial("id").primaryKey(),
    appointmentId: varchar("appointment_id", { length: 255 }).notNull(),
    dentistId: integer("dentist_id")
      .notNull()
      .references(() => dentists.id),
    patientId: integer("patient_id")
      .notNull()
      .references(() => patients.id),
    treatmentId: integer("treatment_id")
      .notNull()
      .references(() => treatments.id),
    start: timestamp("start", { mode: "string", withTimezone: true }).notNull(),
    end: timestamp("end", { mode: "string", withTimezone: true }).notNull(),
    duration: integer("duration").notNull(), // in minutes
    status: varchar("status", { length: 50 }).notNull(),
    room: varchar("room", { length: 50 }),
    notes: text("notes"),
    createdAt: timestamp("created_at", { mode: "string" })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { mode: "string" })
      .notNull()
      .defaultNow(),
  },
  (table) => {
    return {
      appointmentIdIdx: uniqueIndex("appointment_id_idx").on(
        table.appointmentId,
      ),
    };
  },
);

// Define relations
export const appointmentsRelations = relations(appointments, ({ one }) => ({
  dentist: one(dentists, {
    fields: [appointments.dentistId],
    references: [dentists.id],
  }),
  patient: one(patients, {
    fields: [appointments.patientId],
    references: [patients.id],
  }),
  treatment: one(treatments, {
    fields: [appointments.treatmentId],
    references: [treatments.id],
  }),
}));

// Define types
export type Dentist = typeof dentists.$inferSelect;
export type Patient = typeof patients.$inferSelect;
export type Treatment = typeof treatments.$inferSelect;
export type Appointment = typeof appointments.$inferSelect;

export type NewDentist = typeof dentists.$inferSelect;
export type NewPatient = typeof patients.$inferSelect;
export type NewTreatment = typeof treatments.$inferSelect;
export type NewAppointment = typeof appointments.$inferSelect;

// Define a custom type for seeding that omits auto-generated fields
export type AppointmentSeed = Omit<
  NewAppointment,
  "id" | "createdAt" | "updatedAt"
> & {
  room?: string | null;
  notes?: string | null;
};

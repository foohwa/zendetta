import { relations } from "drizzle-orm/relations";
import { dentists, appointments, patients, treatments } from "./schema";

export const appointmentsRelations = relations(appointments, ({one}) => ({
	dentist: one(dentists, {
		fields: [appointments.dentistId],
		references: [dentists.id]
	}),
	patient: one(patients, {
		fields: [appointments.patientId],
		references: [patients.id]
	}),
	treatment: one(treatments, {
		fields: [appointments.treatmentId],
		references: [treatments.id]
	}),
}));

export const dentistsRelations = relations(dentists, ({many}) => ({
	appointments: many(appointments),
}));

export const patientsRelations = relations(patients, ({many}) => ({
	appointments: many(appointments),
}));

export const treatmentsRelations = relations(treatments, ({many}) => ({
	appointments: many(appointments),
}));
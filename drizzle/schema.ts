import { pgTable, pgEnum, serial, varchar, uniqueIndex, foreignKey, integer, timestamp, text } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"

export const aalLevel = pgEnum("aal_level", ['aal1', 'aal2', 'aal3'])
export const codeChallengeMethod = pgEnum("code_challenge_method", ['s256', 'plain'])
export const factorStatus = pgEnum("factor_status", ['unverified', 'verified'])
export const factorType = pgEnum("factor_type", ['totp', 'webauthn'])
export const oneTimeTokenType = pgEnum("one_time_token_type", ['confirmation_token', 'reauthentication_token', 'recovery_token', 'email_change_token_new', 'email_change_token_current', 'phone_change_token'])
export const requestStatus = pgEnum("request_status", ['PENDING', 'SUCCESS', 'ERROR'])
export const keyStatus = pgEnum("key_status", ['default', 'valid', 'invalid', 'expired'])
export const keyType = pgEnum("key_type", ['aead-ietf', 'aead-det', 'hmacsha512', 'hmacsha256', 'auth', 'shorthash', 'generichash', 'kdf', 'secretbox', 'secretstream', 'stream_xchacha20'])
export const action = pgEnum("action", ['INSERT', 'UPDATE', 'DELETE', 'TRUNCATE', 'ERROR'])
export const equalityOp = pgEnum("equality_op", ['eq', 'neq', 'lt', 'lte', 'gt', 'gte', 'in'])


export const dentists = pgTable("dentists", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }).notNull(),
});

export const appointments = pgTable("appointments", {
	id: serial("id").primaryKey().notNull(),
	appointmentId: varchar("appointment_id", { length: 255 }).notNull(),
	dentistId: integer("dentist_id").notNull().references(() => dentists.id),
	patientId: integer("patient_id").notNull().references(() => patients.id),
	treatmentId: integer("treatment_id").notNull().references(() => treatments.id),
	start: timestamp("start", { withTimezone: true, mode: 'string' }).notNull(),
	end: timestamp("end", { withTimezone: true, mode: 'string' }).notNull(),
	duration: integer("duration").notNull(),
	status: varchar("status", { length: 50 }).notNull(),
	room: varchar("room", { length: 50 }),
	notes: text("notes"),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
},
(table) => {
	return {
		appointmentIdIdx: uniqueIndex("appointment_id_idx").using("btree", table.appointmentId),
	}
});

export const patients = pgTable("patients", {
	id: serial("id").primaryKey().notNull(),
	firstName: varchar("first_name", { length: 255 }).notNull(),
	lastName: varchar("last_name", { length: 255 }).notNull(),
});

export const treatments = pgTable("treatments", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }).notNull(),
});
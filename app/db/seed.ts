import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import pg from "pg";
import {
  appointments,
  AppointmentSeed,
  Dentist,
  dentists,
  Patient,
  patients,
  Treatment,
  treatments,
} from "./schema";
import "dotenv/config";

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool);

async function seed() {
  // Run migrations first
  await migrate(db, { migrationsFolder: "./drizzle" });

  // Seed dentists
  const dentistsData: Dentist[] = [
    {
      id: 42,
      firstName: "Jane",
      lastName: "Johnson",
      avatarUrl: "https://i.pravatar.cc/150?img=68",
    },
    {
      id: 19,
      firstName: "Sam",
      lastName: "Smith",
      avatarUrl: "https://i.pravatar.cc/150?img=32",
    },
    {
      id: 84,
      firstName: "Alex",
      lastName: "Brown",
      avatarUrl: "https://i.pravatar.cc/150?img=28",
    },
  ];
  await db.insert(dentists).values(dentistsData).onConflictDoNothing();

  // Seed patients
  const patientsData: Patient[] = [
    { id: 2, firstName: "Jane", lastName: "Smith" },
    { id: 4, firstName: "Alice", lastName: "Brown" },
    { id: 5, firstName: "Charlie", lastName: "Davis" },
    { id: 6, firstName: "Diana", lastName: "Evans" },
  ];
  await db.insert(patients).values(patientsData).onConflictDoNothing();

  // Seed treatments
  const treatmentsData: Treatment[] = [
    { id: 2, name: "Teeth Whitening" },
    { id: 4, name: "Root Canal" },
    { id: 5, name: "Tooth Extraction" },
    { id: 6, name: "Dental Checkup" },
  ];
  await db.insert(treatments).values(treatmentsData).onConflictDoNothing();

  // Seed appointments
  const appointmentsData: AppointmentSeed[] = [
    {
      appointmentId: "apt001",
      dentistId: 42,
      patientId: 2,
      treatmentId: 2,
      start: new Date("2024-07-21T00:00:00Z"),
      end: new Date("2024-07-21T01:00:00Z"),
      duration: 60,
      status: "IN_PROGRESS",
    },
    {
      appointmentId: "apt002",
      dentistId: 19,
      patientId: 2,
      treatmentId: 2,
      start: new Date("2024-07-21T05:00:00Z"),
      end: new Date("2024-07-21T06:00:00Z"),
      duration: 60,
      status: "IN_PROGRESS",
    },
    {
      appointmentId: "apt004",
      dentistId: 42,
      patientId: 4,
      treatmentId: 4,
      start: new Date("2024-07-21T09:00:00Z"),
      end: new Date("2024-07-21T10:00:00Z"),
      duration: 60,
      status: "FINISHED",
    },
    {
      appointmentId: "apt005",
      dentistId: 19,
      patientId: 5,
      treatmentId: 5,
      start: new Date("2024-07-21T07:00:00Z"),
      end: new Date("2024-07-21T08:00:00Z"),
      duration: 60,
      status: "REGISTERED",
    },
    {
      appointmentId: "apt006",
      dentistId: 84, // Using the first dentist ID from the array
      patientId: 6,
      treatmentId: 6,
      start: new Date("2024-07-21T02:00:00Z"),
      end: new Date("2024-07-21T03:00:00Z"),
      duration: 60,
      status: "REGISTERED",
    },
  ];
  await db.insert(appointments).values(appointmentsData).onConflictDoNothing();

  console.log("Database seeded successfully!");
}

seed()
  .catch(console.error)
  .finally(() => pool.end());

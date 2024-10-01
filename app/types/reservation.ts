import {
  Appointment as SchemaAppointment,
  Dentist,
  Patient,
  Treatment,
} from "~/db/schema";
import { ISODate, ISODateTime } from "~/types/date";

export interface Appointment {
  appointmentId: string;
  appointmentDate: ISODate;
  start: ISODateTime;
  end: ISODateTime;
  status: ReservationStatus;
  patientName: string;
  patientId: string;
  treatment?: Treatment;
  dentistId: string | string[];
}

export type AppointmentWithDentistAndPatient = SchemaAppointment & {
  patient: Patient;
  treatment: Treatment;
  dentist: Dentist;
};

export type ReservationStatusType = keyof typeof ReservationStatus;

export enum ReservationStatus {
  "FINISHED" = "FINISHED",
  "IN_PROGRESS" = "IN_PROGRESS",
  "REGISTERED" = "REGISTERED",
}

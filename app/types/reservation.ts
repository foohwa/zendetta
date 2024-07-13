import { ISODate, ISODateTime, Treatment } from "~/types";

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

export type ReservationStatusType = keyof typeof ReservationStatus;

export enum ReservationStatus {
  "FINISHED" = "FINISHED",
  "IN_PROGRESS" = "IN_PROGRESS",
  "REGISTERED" = "REGISTERED",
}

import { ISODate, ISODateTime, Treatment } from "~/types";

export interface Appointment {
  appointmentId: string;
  appointmentDate: ISODate;
  startTime: ISODateTime;
  endTime: ISODateTime;
  status: ReservationStatus;
  patientName: string;
  patientId: string;
  treatment: Treatment;
}

export type ReservationStatusType = keyof typeof ReservationStatus;

export enum ReservationStatus {
  "FINISHED" = "FINISHED",
  "IN_PROGRESS" = "IN_PROGRESS",
  "REGISTERED" = "REGISTERED",
}

import { ISODate, ISODateTime, Treatment } from "~/types";

export interface Reservation {
  reservationId: string;
  reservationDate: ISODate;
  startTime: ISODateTime;
  endTime: ISODateTime;
  status: ReservationStatus;
  patientName: string;
  patientId: string;
  treatment: Treatment;
}

export type ReservationStatus = "FINISHED" | "IN_PROGRESS" | "REGISTERED";

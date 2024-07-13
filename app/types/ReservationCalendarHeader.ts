import { Dentist } from "~/types/dentist";

export interface AppointmentCalendarHeader
  extends Pick<Dentist, "dentistId" | "firstName" | "lastName" | "avatarUrl"> {
  totalOfTodayAppointment: number;
}

// export interface ReservationCalendarHeader {
//   doctorName: string;
//   doctorId: string;
//   totalOfTodayAppointment: number;
// }

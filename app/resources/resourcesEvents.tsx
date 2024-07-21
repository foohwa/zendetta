import {
  Appointment,
  AppointmentCalendarHeader,
  ReservationStatus,
} from "~/types";
import { parseISO } from "date-fns";

export const appointmentEvents: Appointment[] = [
  {
    dentistId: "42",
    appointmentId: "apt001",
    appointmentDate: "2024-07-21",
    start: "2024-07-21T00:00:00Z", // Adjusted to 8am UTC
    end: "2024-07-21T01:00:00Z", // Adjusted to 9am UTC
    status: ReservationStatus.IN_PROGRESS,
    patientName: "Jane Smith",
    patientId: "pat002",
    treatment: {
      id: "treat002",
      name: "Teeth Whitening",
    },
  },
  {
    dentistId: "19",
    appointmentId: "apt002",
    appointmentDate: "2024-07-21",
    start: "2024-07-21T05:00:00Z", // Adjusted to 12pm UTC
    end: "2024-07-21T06:00:00Z", // Adjusted to 1pm UTC
    status: ReservationStatus.IN_PROGRESS,
    patientName: "Jane Smith",
    patientId: "pat002",
    treatment: {
      id: "treat002",
      name: "Teeth Whitening",
    },
  },
  {
    dentistId: "42",
    appointmentId: "apt004",
    appointmentDate: "2024-07-18",
    start: "2024-07-21T09:00:00Z", // Adjusted to 9am UTC
    end: "2024-07-21T10:00:00Z", // Adjusted to 10am UTC
    status: ReservationStatus.FINISHED,
    patientName: "Alice Brown",
    patientId: "pat004",
    treatment: {
      id: "treat004",
      name: "Root Canal",
    },
  },
  {
    dentistId: "19",
    appointmentId: "apt005",
    appointmentDate: "2024-07-19",
    start: "2024-07-21T07:00:00Z", // Adjusted to 3pm UTC
    end: "2024-07-21T08:00:00Z", // Adjusted to 4pm UTC
    status: ReservationStatus.REGISTERED,
    patientName: "Charlie Davis",
    patientId: "pat005",
    treatment: {
      id: "treat005",
      name: "Tooth Extraction",
    },
  },
  {
    dentistId: ["84", "19"],
    appointmentId: "apt006",
    appointmentDate: "2024-07-20",
    start: "2024-07-21T02:00:00Z", // Adjusted to 1pm UTC
    end: "2024-07-21T03:00:00Z", // Adjusted to 2pm UTC
    status: ReservationStatus.REGISTERED,
    patientName: "Diana Evans",
    patientId: "pat006",
    treatment: {
      id: "treat006",
      name: "Dental Checkup",
    },
  },
];

export const BlockedEvents = [
  {
    title: "Break Time",
    resourceId: ["84"],
    start: parseISO("2024-07-21T02:00:00Z"), // Adjusted to 1pm UTC
    end: parseISO("2024-07-21T03:00:00Z"), // Adjusted to 2pm UTC
  },
];

// TODO: need to change the shape of this to cater for on leave, other kind of event
// possibly, can do it with background event props but background events had it limitation
export const BackgroundEvents: Appointment[] = [
  {
    dentistId: "42",
    appointmentId: "apt002",
    appointmentDate: "2024-07-21",
    start: "2024-07-21T01:00:00Z", // Adjusted to 8am UTC
    end: "2024-07-21T03:00:00Z", // Adjusted to 9am UTC
    status: ReservationStatus.IN_PROGRESS,
    patientName: "Jane Smith",
    patientId: "pat002",
  },
];

export const ReservationHeader: AppointmentCalendarHeader[] = [
  {
    dentistId: "42",
    firstName: "Jane",
    lastName: "Johnson",
    avatarUrl: "https://i.pravatar.cc/150?img=68",
    totalOfTodayAppointment: 7,
  },
  {
    dentistId: "19",
    firstName: "Sam",
    lastName: "Smith",
    avatarUrl: "https://i.pravatar.cc/150?img=32",
    totalOfTodayAppointment: 4,
  },
  {
    dentistId: "84",
    firstName: "Alex",
    lastName: "Brown",
    avatarUrl: "https://i.pravatar.cc/150?img=28",
    totalOfTodayAppointment: 9,
  },
];

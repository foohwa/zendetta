import { AppointmentCalendarHeader } from "~/types";
import { parseISO } from "date-fns";

export default {
  events: [
    {
      title: "Rencontre",
      resourceId: ["42"],
      start: parseISO("2024-06-19T00:00:00Z"), // Adjusted to 8am UTC
      end: parseISO("2024-06-19T01:00:00Z"), // Adjusted to 9am UTC
      resource: {
        appointment: {
          appointmentId: "apt002",
          appointmentDate: "2024-07-16",
          startTime: "2024-06-19T00:00:00Z", // Adjusted to 8am UTC
          endTime: "2024-06-19T01:00:00Z", // Adjusted to 9am UTC
          status: "IN_PROGRESS",
          patientName: "Jane Smith",
          patientId: "pat002",
          treatment: {
            id: "treat002",
            name: "Teeth Whitening",
          },
        },
      },
    },
    {
      title: "Another Meeting",
      resourceId: "19",
      start: parseISO("2024-06-19T05:00:00Z"), // Adjusted to 12pm UTC
      end: parseISO("2024-06-19T06:00:00Z"), // Adjusted to 1pm UTC
      resource: {
        appointment: {
          appointmentId: "apt002",
          appointmentDate: "2024-07-16",
          startTime: "2024-06-19T05:00:00Z", // Adjusted to 12pm UTC
          endTime: "2024-06-19T06:00:00Z", // Adjusted to 1pm UTC
          status: "IN_PROGRESS",
          patientName: "Jane Smith",
          patientId: "pat002",
          treatment: {
            id: "treat002",
            name: "Teeth Whitening",
          },
        },
      },
    },
    {
      title: "A",
      resourceId: "42",
      start: parseISO("2024-06-19T09:00:00Z"), // Adjusted to 9am UTC
      end: parseISO("2024-06-19T10:00:00Z"), // Adjusted to 10am UTC
      resource: {
        appointment: {
          appointmentId: "apt004",
          appointmentDate: "2024-07-18",
          startTime: "2024-06-19T09:00:00Z", // Adjusted to 9am UTC
          endTime: "2024-06-19T10:00:00Z", // Adjusted to 10am UTC
          status: "FINISHED",
          patientName: "Alice Brown",
          patientId: "pat004",
          treatment: {
            id: "treat004",
            name: "Root Canal",
          },
        },
      },
    },
    {
      title: "B",
      resourceId: "19",
      start: parseISO("2024-06-19T07:00:00Z"), // Adjusted to 3pm UTC
      end: parseISO("2024-06-19T08:00:00Z"), // Adjusted to 4pm UTC
      resource: {
        appointment: {
          appointmentId: "apt005",
          appointmentDate: "2024-07-19",
          startTime: "2024-06-19T07:00:00Z", // Adjusted to 3pm UTC
          endTime: "2024-06-19T08:00:00Z", // Adjusted to 4pm UTC
          status: "REGISTERED",
          patientName: "Charlie Davis",
          patientId: "pat005",
          treatment: {
            id: "treat005",
            name: "Tooth Extraction",
          },
        },
      },
    },
    {
      title: "C",
      resourceId: ["84", "19"],
      start: parseISO("2024-06-19T02:00:00Z"), // Adjusted to 1pm UTC
      end: parseISO("2024-06-19T03:00:00Z"), // Adjusted to 2pm UTC
      resource: {
        appointment: {
          appointmentId: "apt006",
          appointmentDate: "2024-07-20",
          startTime: "2024-06-19T02:00:00Z", // Adjusted to 1pm UTC
          endTime: "2024-06-19T03:00:00Z", // Adjusted to 2pm UTC
          status: "REGISTERED",
          patientName: "Diana Evans",
          patientId: "pat006",
          treatment: {
            id: "treat006",
            name: "Dental Checkup",
          },
        },
      },
    },
  ],

  list: [
    {
      id: "a",
      title: "Room A",
    },
    {
      id: "b",
      title: "Room B",
    },
    {
      id: "c",
      title: "Room C",
    },
  ],
};

export const BlockedEvents = [
  {
    title: "Break Time",
    resourceId: ["84"],
    start: parseISO("2024-06-19T02:00:00Z"), // Adjusted to 1pm UTC
    end: parseISO("2024-06-19T03:00:00Z"), // Adjusted to 2pm UTC
  },
];
export const BackgroundEvents = [
  {
    title: "ON_LEAVE",
    resourceId: ["42"],
    start: parseISO("2024-06-19T01:00:00Z"), // Adjusted to 8am UTC
    end: parseISO("2024-06-19T03:00:00Z"), // Adjusted to 9am UTC
    resource: {
      appointment: {
        appointmentId: "apt002",
        appointmentDate: "2024-07-16",
        startTime: "2024-06-19T01:00:00Z", // Adjusted to 8am UTC
        endTime: "2024-06-19T02:00:00Z", // Adjusted to 9am UTC
        status: "IN_PROGRESS",
        patientName: "Jane Smith",
        patientId: "pat002",
        treatment: {
          id: "treat002",
          name: "Teeth Whitening",
        },
      },
    },
  },
];

export const ReservationHeader: AppointmentCalendarHeader[] = [
  {
    id: "42",
    title: "Jane Johnson",
    totalOfTodayAppointment: 7,
    doctorAvatar: "https://i.pravatar.cc/150?img=68",
  },
  {
    id: "19",
    title: "Sam Smith",
    totalOfTodayAppointment: 4,
    doctorAvatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: "84",
    title: "Alex Brown",
    totalOfTodayAppointment: 9,
    doctorAvatar: "https://i.pravatar.cc/150?img=28",
  },
];

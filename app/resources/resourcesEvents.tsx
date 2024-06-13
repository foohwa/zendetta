import { AppointmentCalendarHeader } from "~/types";

export default {
  events: [
    {
      title: "Rencontre",
      resourceId: ["42"],
      start: new Date(2024, 5, 13, 9, 0, 0, 0),
      end: new Date(2024, 5, 13, 10, 0, 0, 0),
      resource: {
        appointment: {
          appointmentId: "apt002",
          appointmentDate: "2024-07-16",
          startTime: "2024-07-16T10:00:00Z",
          endTime: "2024-07-16T10:45:00Z",
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
      start: new Date(2024, 5, 13, 13, 30, 0, 0),
      end: new Date(2024, 5, 13, 15, 0, 0),
      resource: {
        appointment: {
          appointmentId: "apt002",
          appointmentDate: "2024-07-16",
          startTime: "2024-07-16T10:00:00Z",
          endTime: "2024-07-16T10:45:00Z",
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
      start: new Date(2024, 5, 13, 10, 0, 0, 0),
      end: new Date(2024, 5, 13, 12, 0, 0, 0),
      resource: {
        appointment: {
          appointmentId: "apt004",
          appointmentDate: "2024-07-18",
          startTime: "2024-07-18T14:00:00Z",
          endTime: "2024-07-18T14:45:00Z",
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
      start: new Date(2024, 5, 13, 14, 15, 0, 0),
      end: new Date(2024, 5, 13, 16, 0, 0),
      resource: {
        appointment: {
          appointmentId: "apt005",
          appointmentDate: "2024-07-19",
          startTime: "2024-07-19T15:00:00Z",
          endTime: "2024-07-19T15:30:00Z",
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
      start: new Date(2024, 5, 13, 8, 0, 0, 0),
      end: new Date(2024, 5, 13, 9, 0, 0, 0),
      resource: {
        appointment: {
          appointmentId: "apt006",
          appointmentDate: "2024-07-20",
          startTime: "2024-07-20T16:00:00Z",
          endTime: "2024-07-20T16:30:00Z",
          status: "IN_PROGRESS",
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

export const ReservationHeader: AppointmentCalendarHeader[] = [
  {
    id: "42",
    title: "Jane Johnson",
    totalOfTodayAppointment: 7,
  },
  {
    id: "19",
    title: "Sam Smith",
    totalOfTodayAppointment: 4,
  },
  {
    id: "84",
    title: "Alex Brown",
    totalOfTodayAppointment: 9,
  },
  {
    id: "99",
    title: "Alan Tan",
    totalOfTodayAppointment: 9,
  },
  {
    id: "12",
    title: "Gary Ooi",
    totalOfTodayAppointment: 9,
  },
  {
    id: "54",
    title: "Yuan Ooi",
    totalOfTodayAppointment: 9,
  },
  {
    id: "24",
    title: "Max Ooi",
    totalOfTodayAppointment: 9,
  },
  {
    id: "91",
    title: "Gerry Ooi",
    totalOfTodayAppointment: 9,
  },
];

import { ReservationCalendarHeader } from "~/types";

export default {
  events: [
    {
      title: "Rencontre",
      resourceId: ["42"],
      start: new Date(2024, 5, 11, 9, 15, 0, 0),
      end: new Date(2024, 5, 11, 11, 45, 0, 0),
    },
    {
      title: "Another Meeting",
      resourceId: "19",
      start: new Date(2024, 5, 11, 13, 30, 0, 0),
      end: new Date(2024, 5, 11, 15, 0, 0),
    },
    {
      title: "A",
      resourceId: "42",
      start: new Date(2024, 5, 11, 10, 0, 0, 0),
      end: new Date(2024, 5, 11, 12, 30, 0, 0),
    },
    {
      title: "B",
      resourceId: "19",
      start: new Date(2024, 5, 11, 14, 15, 0, 0),
      end: new Date(2024, 5, 11, 16, 0, 0),
    },
    {
      title: "C",
      resourceId: ["84", "19"],
      start: new Date(2024, 5, 11, 8, 0, 0, 0),
      end: new Date(2024, 5, 11, 9, 0, 0, 0),
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

export const ReservationHeader: ReservationCalendarHeader[] = [
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
];

import { db } from "~/db/db";
import { dentists } from "~/db/schema";

export const getDentistsWithAppointmentCount = async (
  dateString: string = "",
) => {
  const selectedDate = new Date(dateString);
  selectedDate.setHours(0, 0, 0, 0); // Set to the start of the selected day
  const nextDay = new Date(selectedDate);
  nextDay.setDate(nextDay.getDate() + 1);

  return db.select().from(dentists).execute();
};

export const getDentists = async () => {
  return db.select().from(dentists).execute();
};

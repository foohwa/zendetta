import { db } from "~/db/db";

export const getAllAppointments = async () => {
  return db.query.appointments
    .findMany({
      with: {
        dentist: true,
        patient: true,
        treatment: true,
      },
    })
    .execute();
};

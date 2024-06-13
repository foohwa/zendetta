import { Appointment, ReservationStatus } from "~/types";
import { cn } from "~/lib/util";
import { IconSquareRoundedCheckFilled } from "@tabler/icons-react";

type StatusToEventCardBackgroundMap = Record<ReservationStatus, string>;

const statusToEventCardBackgroundMap: StatusToEventCardBackgroundMap = {
  [ReservationStatus.FINISHED]: "bg-[#FBEAEE]",
  [ReservationStatus.IN_PROGRESS]: "bg-[#F1F5EB]",
  [ReservationStatus.REGISTERED]: "bg-[#E9F4FD]",
};

const toBackgroundColorForAppointment = (
  appointment: Appointment,
  appointmentMap = statusToEventCardBackgroundMap,
) => appointmentMap[appointment.status];

export const AppointmentCardComponent = (appointment: Appointment) => {
  return (
    <div
      className={cn(
        "prose flex h-full gap-2 bg-success px-2 py-1 leading-tight",
        toBackgroundColorForAppointment(appointment),
      )}
    >
      <IconSquareRoundedCheckFilled className="text-green-500" />

      <div className="flex-1">
        <h5>{appointment.patientName}</h5>
        <span>time</span>
        <p>{appointment.treatment.name}</p>
      </div>
      <div className="flex-1">{appointment.status.toLowerCase()}</div>
    </div>
  );
};

import { Appointment, ReservationStatus } from "~/types";
import { cn, formatString } from "~/lib/util";
import {
  IconChevronRight,
  IconInfoSquareFilled,
  IconPointFilled,
  IconSquareRoundedCheckFilled,
} from "@tabler/icons-react";
import { parseISO } from "date-fns";
import Element = React.JSX.Element;
import { format } from "date-fns-tz";

type StatusToEventCardBackgroundMap = Record<ReservationStatus, string>;
type StatusToEventStatusIconMap = Record<ReservationStatus, Element>;

const statusToEventCardBackgroundMap: StatusToEventCardBackgroundMap = {
  [ReservationStatus.FINISHED]: "bg-[#FBEAEE]",
  [ReservationStatus.IN_PROGRESS]: "bg-[#F1F5EB]",
  [ReservationStatus.REGISTERED]: "bg-[#E9F4FD]",
};

const statusToEventCardForegroundMap: StatusToEventCardBackgroundMap = {
  [ReservationStatus.FINISHED]: "text-green-500",
  [ReservationStatus.IN_PROGRESS]: "text-yellow-500",
  [ReservationStatus.REGISTERED]: "text-gray-500",
};

const statusToEventStatusIconMap: StatusToEventStatusIconMap = {
  [ReservationStatus.FINISHED]: (
    <IconSquareRoundedCheckFilled className="text-green-500" />
  ),
  [ReservationStatus.IN_PROGRESS]: (
    <IconInfoSquareFilled className="text-blue-500" />
  ),
  [ReservationStatus.REGISTERED]: (
    <IconInfoSquareFilled className="text-red-500" />
  ),
};

const toBackgroundColorForAppointment = (
  appointment: Appointment,
  appointmentMap = statusToEventCardBackgroundMap,
) => appointmentMap[appointment.status];

const toForegroundColorForAppointment = (
  appointment: Appointment,
  appointmentMap = statusToEventCardForegroundMap,
) => appointmentMap[appointment.status];

const toStatusIconForAppointment = (
  appointment: Appointment,
  appointmentMap = statusToEventStatusIconMap,
) => appointmentMap[appointment.status];

export const AppointmentCardComponent = (appointment: Appointment) => {
  // Parse the date-time strings to Date objects
  const start = parseISO(appointment.startTime);
  const end = parseISO(appointment.endTime);

  // console.log(appointment.patientName, start);

  // Format the Date objects to the desired time format
  const formattedStartTime = format(appointment.startTime, "h:mm a", {
    timeZone: "Asia/Kuala_Lumpur",
  });

  console.log(formattedStartTime);
  const formattedEndTime = format(appointment.endTime, "h:mm a", {
    timeZone: "Asia/Kuala_Lumpur",
  });

  return (
    <div
      className={cn(
        "prose relative flex h-full justify-between gap-2 bg-success px-2 py-1 leading-tight",
        toBackgroundColorForAppointment(appointment),
      )}
    >
      {toStatusIconForAppointment(appointment)}

      <div className="flex flex-1 flex-col">
        <h5 className="text-black">{appointment.patientName}</h5>
        <span className="inline-flex items-center text-sm text-gray-500">
          {formattedStartTime} <IconChevronRight size={15} /> {formattedEndTime}
        </span>
        <span className="badge mt-2">{appointment.treatment.name}</span>
      </div>
      <div className="absolute right-2">
        <span className="badge rounded-md px-1">
          <IconPointFilled
            className={cn(toForegroundColorForAppointment(appointment))}
            size={15}
          />
          {formatString(appointment.status)}
        </span>
      </div>
    </div>
  );
};

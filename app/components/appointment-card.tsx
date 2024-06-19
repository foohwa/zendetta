import { Appointment, ReservationStatus } from "~/types";
import { cn, formatString } from "~/lib/util";
import {
  IconCheck,
  IconChevronRight,
  IconCurrencyDollar,
  IconHourglass,
  IconPointFilled,
} from "@tabler/icons-react";
import { format } from "date-fns-tz";
import { ReactNode } from "react";

type StatusToEventCardBackgroundMap = Record<ReservationStatus, string>;
type StatusToEventStatusIconMap = Record<ReservationStatus, ReactNode>;

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
  [ReservationStatus.FINISHED]: <IconCheck size={12} />,
  [ReservationStatus.IN_PROGRESS]: <IconHourglass size={12} />,
  [ReservationStatus.REGISTERED]: <IconCurrencyDollar size={12} />,
};

const toColorMapForAppointment = (
  appointment: Appointment,
  appointmentMap: StatusToEventCardBackgroundMap | StatusToEventStatusIconMap,
) => appointmentMap[appointment.status];

export const AppointmentCardComponent = (appointment: Appointment) => {
  // Format the Date objects to the desired time format
  const formattedStartTime = format(appointment.startTime, "h:mm a", {
    timeZone: "Asia/Kuala_Lumpur",
  });

  const formattedEndTime = format(appointment.endTime, "h:mm a", {
    timeZone: "Asia/Kuala_Lumpur",
  });

  return (
    <div
      className={cn(
        "prose relative flex h-full justify-between gap-2 bg-success px-2 py-1 leading-tight",
        toColorMapForAppointment(appointment, statusToEventCardBackgroundMap),
      )}
    >
      <div className={cn("size-8 h-fit w-fit rounded bg-black p-1 text-white")}>
        {toColorMapForAppointment(appointment, statusToEventStatusIconMap)}
      </div>

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
            className={cn(
              toColorMapForAppointment(
                appointment,
                statusToEventCardForegroundMap,
              ),
            )}
            size={15}
          />
          {formatString(appointment.status)}
        </span>
      </div>
    </div>
  );
};

export const OnLeaveCard = () => {
  return (
    <div className="bg-darken-striped grid h-full w-full items-center justify-items-center">
      <p className="text-md rounded-sm bg-[#b3b3b3] p-0.5 font-semibold">
        Not Available
      </p>
    </div>
  );
};

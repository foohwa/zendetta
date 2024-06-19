import { IconCalendarFilled } from "@tabler/icons-react";

type TotalAppointmentViewProps = {
  totalAppointments: number;
};

export const TotalAppointmentView = ({
  totalAppointments,
}: TotalAppointmentViewProps) => {
  return (
    <>
      <div className="inline-flex items-center gap-3">
        <div className="avatar placeholder">
          <div className="w-9 rounded-xl bg-base-200">
            <IconCalendarFilled className="text-gray-500" />
          </div>
        </div>
        <p className="inline-flex items-center gap-1">
          <span className="text-xl font-bold">{totalAppointments}</span>
          <span className="text-sm font-semibold tracking-tight text-base-content/40">
            total appointments
          </span>
        </p>
      </div>
    </>
  );
};

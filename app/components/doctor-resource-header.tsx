import { IconDots } from "@tabler/icons-react";
import { Dentist } from "~/db/schema";

export const DoctorResourceHeader = ({
  avatarUrl,
  totalOfTodayAppointment,
  firstName,
  lastName,
}: Dentist & { totalOfTodayAppointment: number }) => {
  return (
    <>
      <div className="relative flex h-[60px] w-full items-center gap-3 px-4 py-2">
        <div className="avatar">
          <div className="mask mask-circle size-10">
            {avatarUrl && (
              <img src={avatarUrl} alt="Avatar Tailwind CSS Component" />
            )}
          </div>
        </div>
        <div className="text-start">
          <h6 className="font-bold">{firstName + " " + lastName}</h6>
          <div className="text-xs leading-4">
            <span className="font-normal opacity-50">
              Today&apos;s appointment:&nbsp;
            </span>
            <span className="font-semibold">
              {totalOfTodayAppointment} patient(s)
            </span>
          </div>
        </div>

        <button className="btn btn-ghost btn-xs absolute right-1 top-1">
          <IconDots size={15} />
        </button>
      </div>
    </>
  );
};

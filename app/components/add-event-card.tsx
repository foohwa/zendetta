import { IconPlus } from "@tabler/icons-react";
import { formatISO } from "date-fns";

export type AddEventCardTimeslotProps = {
  // children: ReactElement;
  value: Date;
  resource: string;
  onClick: (event: EventCardEvent) => void;
};

export type EventCardEvent = {
  selectedDate: string;
  selectedDentistId: string;
};

export const AddEventTimeslotCard = ({
  value,
  resource,
  onClick,
}: AddEventCardTimeslotProps) => {
  return (
    <button
      className="rbc-time-slot group h-full w-full hover:bg-stone-100/50"
      onClick={() =>
        onClick({ selectedDate: formatISO(value), selectedDentistId: resource })
      }
    >
      <IconPlus className="invisible m-auto text-stone-500 group-hover:visible" />
    </button>
  );
};

import { IconPlus } from "@tabler/icons-react";
import { formatISO } from "date-fns";
import { Button } from "@headlessui/react";

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
    <Button
      className="rbc-time-slot group h-full w-full hover:bg-stone-100/50"
      onClick={() =>
        onClick({ selectedDate: formatISO(value), selectedDentistId: resource })
      }
    >
      <IconPlus className="invisible m-auto text-stone-500 group-hover:visible" />
    </Button>
  );
};

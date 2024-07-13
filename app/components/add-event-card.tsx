import { IconPlus } from "@tabler/icons-react";

export type AddEventCardTimeslotProps = {
  // children: ReactElement;
  value: Date;
  resource: string;
  onClick: (date: Date, resource: string) => void;
};

export const AddEventTimeslotCard = ({
  value,
  resource,
  onClick,
}: AddEventCardTimeslotProps) => {
  return (
    <button
      className="rbc-time-slot group h-full w-full hover:bg-stone-100/50"
      onClick={() => onClick(value, resource)}
    >
      <IconPlus className="invisible m-auto text-stone-500 group-hover:visible" />
    </button>
  );
};

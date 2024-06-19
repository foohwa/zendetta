import { ReactElement } from "react";

export type AddEventCardProps = {
  children: ReactElement;
};

export const AddEventCard = () => {
  return (
    <div
      className="rbc-time-slot h-full w-full hover:bg-violet-500"
      onMouseEnter={() => {
        console.log("Add event");
      }}
    ></div>
  );
};

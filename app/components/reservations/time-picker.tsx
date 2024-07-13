import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { IconChevronDown, IconClockHour7 } from "@tabler/icons-react";
import { generateTimeIntervals } from "~/lib/util";
import { useState } from "react";

export type TimePickerProps = {
  selectedTime: string;
};

export const TimePicker = ({ selectedTime }: TimePickerProps) => {
  const availableTimes: string[] = generateTimeIntervals();
  const [selected, setSelected] = useState(selectedTime);

  return (
    <>
      <Listbox value={selected} onChange={setSelected}>
        <ListboxButton className="relative w-fit cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left leading-6 text-black ring-1 ring-inset ring-gray-500/15 focus:outline-none focus:ring-2 focus:ring-primary">
          <span className="flex items-center">
            <IconClockHour7 className="size-5 text-gray-500/50" />
            <span className="ml-2 block truncate text-sm lowercase">
              {selected}
            </span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <IconChevronDown
              aria-hidden="true"
              className="size-5 text-gray-400"
            />
          </span>
        </ListboxButton>

        <ListboxOptions
          anchor="bottom"
          className="h-60 w-[var(--button-width)] overflow-y-hidden rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 [--anchor-gap:4px] focus:outline-none"
        >
          {availableTimes.map((time) => (
            <ListboxOption
              key={time}
              className="group relative cursor-default select-none px-3 py-2 text-sm lowercase text-gray-900 data-[focus]:bg-gray-500/5"
              value={time}
            >
              <span className="block truncate font-normal group-data-[selected]:font-semibold">
                {time}
              </span>

              {/*<span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">*/}
              {/*  <IconCheck aria-hidden="true" className="h-5 w-5" />*/}
              {/*</span>*/}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </>
  );
};

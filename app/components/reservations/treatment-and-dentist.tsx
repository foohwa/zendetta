import { useState } from "react";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Field,
  Label,
  Textarea,
} from "@headlessui/react";
import { clsx } from "clsx";
import {
  IconCircleCheckFilled,
  IconSelector,
  IconSquareArrowUpFilled,
} from "@tabler/icons-react";
import { cn } from "~/lib/util";
import { TimePicker } from "~/components/reservations/time-picker";
import { dentists } from "~/resources/mock-data/doctorsMockData";
import { ISODateTime } from "~/types";
import { addHours, format, parseISO } from "date-fns";

export type Treatment = {
  id: number;
  name: string;
};

// TODO: move this mock data to somewhere else
const treatment: Treatment[] = [
  { id: 1, name: "General Checking" },
  { id: 2, name: "Tooth Scaling" },
  { id: 3, name: "Tooth Extraction" },
  { id: 4, name: "Tooth Braces (Metal)" },
  { id: 5, name: "Tooth Polishing" },
];

type TreatmentAndDentistProps = {
  selectedDentistId: string;
  selectedDate: ISODateTime;
};

export const TreatmentAndDentistPage = ({
  selectedDentistId,
  selectedDate,
}: TreatmentAndDentistProps) => {
  const [selectedTreatment, setSelectedTreatment] = useState<
    Treatment[] | null[] | undefined
  >([]);
  const [query, setQuery] = useState("");

  const selectedDentist = dentists.find(
    (dentist) => dentist.dentistId === selectedDentistId,
  );
  const date = parseISO(selectedDate);
  const nextHour = addHours(date, 1);
  const formattedDate = format(date, "EEEE, dd MMMM yyyy");
  const formattedHour = format(date, "HHmm");
  const formattedNextHour = format(nextHour, "HHmm");

  const filteredPeople =
    query === ""
      ? treatment
      : treatment.filter((treatment) => {
          return treatment.name.toLowerCase().includes(query.toLowerCase());
        });

  // console.log(filteredPeople);

  return (
    <>
      {/*<Example />*/}
      {/*<Button className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">*/}
      {/*  Save changes*/}
      {/*</Button>*/}

      <div className="grid grid-cols-1 gap-x-6 gap-y-6">
        <Field>
          <Label className="text-xs/6 font-medium tracking-tight">
            Treatment
          </Label>
          <Combobox
            multiple
            value={selectedTreatment}
            onChange={setSelectedTreatment}
            onClose={() => setQuery("")}
          >
            <div className="relative mt-1">
              <ComboboxInput
                className={clsx(
                  "w-full rounded-lg border border-gray-500/15 py-1.5 pl-3 pr-8 text-sm/6 text-black",
                )}
                displayValue={(treatments: Treatment[]) => {
                  return treatments
                    .map((treatment) => {
                      return treatment.name;
                    })
                    .join(", ");
                }}
                placeholder="Select treatment"
                onChange={(event) => setQuery(event.target.value)}
              />
              <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
                <IconSelector className="size-5 stroke-gray-500/60 transition data-[focus]:rotate-180 group-data-[hover]:stroke-gray-500" />
              </ComboboxButton>
            </div>

            <ComboboxOptions
              anchor="bottom"
              className={cn(
                "w-[var(--input-width)] rounded-xl border bg-white p-1 transition duration-100 ease-in [--anchor-gap:4px] empty:invisible data-[leave]:data-[closed]:opacity-0",
              )}
            >
              {filteredPeople.map((person) => (
                <ComboboxOption
                  key={person.id}
                  value={person}
                  className="group flex cursor-default select-none items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-gray-500/5"
                >
                  <IconCircleCheckFilled className="invisible size-4 fill-black group-data-[selected]:visible" />
                  <div className="text-sm/6 text-black">{person.name}</div>
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          </Combobox>
        </Field>

        <Field>
          <Label className="text-xs/6 font-medium tracking-tight">
            Dentist
          </Label>
          <div className="mt-1 overflow-hidden rounded-lg border border-gray-500/15">
            <div className="flex items-center p-3">
              {selectedDentist?.avatarUrl ? (
                <div className="avatar">
                  <div className="h-9 w-9 rounded-full">
                    <img
                      alt=""
                      src={selectedDentist?.avatarUrl}
                      className="inline-block"
                    />
                  </div>
                </div>
              ) : (
                <div className="avatar placeholder">
                  <div className="size-9 rounded-full bg-neutral text-neutral-content">
                    <span>{selectedDentist?.firstName.charAt(0)}</span>
                  </div>
                </div>
              )}
              <div className="ml-3 space-y-0.5">
                <p className="text-sm font-semibold text-gray-700">
                  {`${selectedDentist?.firstName} ${selectedDentist?.lastName}`}
                </p>
                {/* TODO: should this be together with dentist object or separate api */}
                <p className="text-xs text-gray-500">
                  Today&apos;s appointment:{" "}
                  <span className="text-gray-700">0 patient(s)</span>
                </p>
              </div>
            </div>
          </div>
        </Field>

        <Field>
          <Label className="text-xs/6 font-medium tracking-tight">
            Date & Time
          </Label>
          <div className="mt-1 flex items-center justify-between gap-2">
            <div className="flex-1">
              <div className="w-max border-l-2 border-l-primary px-2 py-1">
                <p className="text-sm font-semibold tracking-tight">
                  {formattedDate}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-3">
              <TimePicker selectedTime={formattedHour} />
              <span className="text-sm text-gray-500/80">to</span>
              <TimePicker selectedTime={formattedNextHour} />
            </div>
          </div>
        </Field>

        <Field>
          <Label className="text-xs/6 font-medium tracking-tight">
            Quick Note <span className="text-gray-400">(Optional)</span>
          </Label>
          <Textarea
            className="mt-1 block w-full resize-y rounded-lg border border-gray-500/15 bg-white/5 px-3 py-1.5 text-sm/6 focus:outline-none data-[focus]:border-primary data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 data-[focus]:ring-primary"
            rows={3}
          />
        </Field>

        <Field>
          <Label className="text-xs/6 font-medium tracking-tight">
            Attached Files <span className="text-gray-400">(Optional)</span>
          </Label>
          <div className="mt-1 flex justify-center rounded-lg border border-dashed border-gray-900/25 bg-gray-100/50 p-6">
            <div className="flex items-center text-center text-sm">
              <div className="flex items-center leading-6 text-gray-600">
                <IconSquareArrowUpFilled
                  aria-hidden="true"
                  className="mx-auto size-7 text-gray-300"
                />
                <p className="pl-2">Drag & drop files here</p>
              </div>
              <div className="divider divider-horizontal mx-2"></div>
              <div>
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md font-semibold text-primary-content focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 hover:text-primary-content/50"
                >
                  <span>Browse Files</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="mt-1 flex justify-between text-xs leading-6 text-gray-500">
            <p>Maximum upload file sizes: 10MB</p>
            <p>0 of 5</p>
          </div>
        </Field>
      </div>
    </>
  );
};

import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Field,
  Input,
  Label,
  Radio,
  RadioGroup,
  Textarea,
} from "@headlessui/react";
import { clsx } from "clsx";
import { useState } from "react";
import { patients } from "~/resources/mock-data/patients";
import { cn } from "~/lib/util";
import { Patient } from "~/types/patient";
import { IconMail, IconPhone } from "@tabler/icons-react";
import { z } from "zod";
import { useRemixFormContext } from "remix-hook-form";

export const BasicInformationFormSchema = z.object({
  patientId: z.string(),
  age: z.string(),
  gender: z.string(),
  email: z.string(),
  phoneNumber: z.string(),
  address: z.string(),
});

type BasicInformationFormValues = z.infer<typeof BasicInformationFormSchema>;

export const BasicInformation = () => {
  const { register, setValue } =
    useRemixFormContext<BasicInformationFormValues>();
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [selectedGender, setSelectedGender] = useState<"male" | "female">(
    "male",
  );
  const [query, setQuery] = useState("");

  setValue("gender", selectedGender);

  const filteredPatient =
    query === ""
      ? patients
      : patients.filter((patient) => {
          const name = `${patient.firstName} ${patient.lastName}`;
          return name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <>
      <div className="grid grid-cols-1 gap-x-6 gap-y-6">
        <Field>
          <Label className="text-xs/6 font-medium tracking-tight">
            Patient Name
          </Label>
          <Combobox
            value={selectedPatient}
            onChange={(patient: Patient) => {
              setSelectedPatient(patient);
              setValue("patientId", patient.id);
            }}
            onClose={() => setQuery("")}
          >
            <div className="relative mt-1">
              <ComboboxInput
                className={clsx(
                  "w-full rounded-lg border border-gray-500/15 py-1.5 pl-3 pr-8 text-sm/6 text-black",
                )}
                displayValue={(patient: Patient) => {
                  if (!patient) return "";
                  return `${patient?.firstName} ${patient?.lastName}`;
                }}
                placeholder="Select patient"
                onChange={(event) => setQuery(event.target.value)}
              />
              {/*<ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">*/}
              {/*  <IconSelector className="size-5 stroke-gray-500/60 transition data-[focus]:rotate-180 group-data-[hover]:stroke-gray-500" />*/}
              {/*</ComboboxButton>*/}
            </div>

            <ComboboxOptions
              anchor="bottom"
              className={cn(
                "w-[var(--input-width)] rounded-xl border bg-white p-1 transition duration-100 ease-in [--anchor-gap:4px] empty:invisible data-[leave]:data-[closed]:opacity-0",
              )}
            >
              {filteredPatient.map((patient) => (
                <ComboboxOption
                  key={patient.id}
                  value={patient}
                  className="group flex cursor-default select-none items-center gap-2.5 rounded-lg px-3 py-1.5 data-[focus]:bg-gray-500/5"
                >
                  <div className="avatar">
                    <div className="h-9 w-9 rounded-full">
                      <img alt="" src={patient?.avatarUrl} />
                    </div>
                  </div>
                  <div className="text-sm/6 text-black">
                    {`${patient.firstName} ${patient.lastName}`}
                  </div>
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          </Combobox>
        </Field>

        <div className="flex items-center justify-between gap-5">
          <Field className="flex-1">
            <Label className="text-xs/6 font-medium tracking-tight">Age</Label>
            <Input
              {...register("age")}
              className="mt-1 w-full rounded-lg border border-gray-500/15 py-1.5 pl-3 pr-8 text-sm/6 text-black"
              placeholder="Age"
            />
          </Field>

          <Field>
            <Label className="text-xs/6 font-medium tracking-tight">
              Gender
            </Label>
            <RadioGroup
              value={selectedGender}
              onChange={(gender) => {
                setSelectedGender(gender);
                setValue("gender", gender);
              }}
              className="mt-1 flex gap-2"
            >
              <Radio
                value={"male"}
                className="focus:outline-non group relative flex w-28 cursor-pointer rounded-lg border border-gray-500/15 py-2 pl-3 pr-8 text-sm/6 text-black data-[checked]:border-primary"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-4 w-4 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white group-data-[checked]:border-transparent group-data-[checked]:bg-primary group-data-[focus]:ring-2 group-data-[focus]:ring-primary group-data-[focus]:ring-offset-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>
                <span className="ml-3 flex flex-col">
                  <span className="block text-sm font-medium text-gray-900">
                    Male
                  </span>
                </span>
              </Radio>
              <Radio
                value={"female"}
                className="focus:outline-non group relative flex w-28 cursor-pointer rounded-lg border border-gray-500/15 py-2 pl-3 pr-8 text-sm/6 text-black data-[checked]:border-primary"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-4 w-4 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white group-data-[checked]:border-transparent group-data-[checked]:bg-primary group-data-[focus]:ring-2 group-data-[focus]:ring-primary group-data-[focus]:ring-offset-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>
                <span className="ml-3 flex flex-col">
                  <span className="block text-sm font-medium text-gray-900">
                    Female
                  </span>
                </span>
              </Radio>
            </RadioGroup>
          </Field>
        </div>

        <Field>
          <Label className="text-xs/6 font-medium tracking-tight">
            Email Address
          </Label>
          <div className="relative mt-1 rounded-md">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <IconMail aria-hidden="true" className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              {...register("email")}
              className="block w-full rounded-lg border border-gray-500/15 py-1.5 pl-10 pr-8 text-sm/6 text-black"
              placeholder="Enter your email here"
            />
          </div>
        </Field>

        <Field>
          <Label className="text-xs/6 font-medium tracking-tight">
            Phone Number
          </Label>
          <div className="relative mt-1 rounded-md">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <IconPhone aria-hidden="true" className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              {...register("phoneNumber")}
              className="block w-full rounded-lg border border-gray-500/15 py-1.5 pl-10 pr-8 text-sm/6 text-black"
              placeholder="010 9473669"
            />
          </div>
        </Field>

        <Field>
          <Label className="text-xs/6 font-medium tracking-tight">
            Address
          </Label>
          <Textarea
            {...register("address")}
            className="mt-1 block w-full resize-y rounded-lg border border-gray-500/15 bg-white/5 px-3 py-1.5 text-sm/6 focus:outline-none data-[focus]:border-primary data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 data-[focus]:ring-primary"
            rows={3}
          />
        </Field>
      </div>
    </>
  );
};

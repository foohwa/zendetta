import {
  CloseButton,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { IconX } from "@tabler/icons-react";
import { TreatmentAndDentistPage } from "~/components/reservations/treatment-and-dentist";
import { EventCardEvent } from "~/components/add-event-card";
import { useState } from "react";

type CreateAppointmentDialogProps = {
  open: boolean;
  onClose: (value: boolean) => void;
  selectedSlot: EventCardEvent;
};

export const CreateAppointmentDialogComponent = ({
  open,
  onClose,
  selectedSlot,
}: CreateAppointmentDialogProps) => {
  const [step, setStep] = useState(1);

  return (
    <Transition appear={true} show={open}>
      <Dialog className="relative z-10" onClose={(value) => onClose(value)}>
        <TransitionChild
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-400/50 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <TransitionChild
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <DialogPanel className="pointer-events-auto relative w-screen max-w-xl py-8 pr-4">
                  <div className="h-full overflow-y-auto rounded-2xl bg-white pt-4 shadow-xl">
                    <div className="flex items-center justify-between border-b px-4 pb-3 sm:px-6">
                      <DialogTitle className="text-lg font-semibold leading-6 text-gray-900">
                        Add patient to waitlist
                      </DialogTitle>

                      <TransitionChild
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <CloseButton as="button">
                          <IconX className="text-gray-500" />
                        </CloseButton>
                      </TransitionChild>
                    </div>
                    <div className="relative mt-2 flex flex-1 flex-col px-4">
                      {/* Tab */}
                      <ul className="steps my-4">
                        <li className="step">
                          <div className="mt-1">
                            <span className="text-xs font-medium uppercase tracking-tight text-gray-400">
                              Step 1
                            </span>
                            <p className="text-sm font-semibold leading-tight tracking-tight">
                              Treatment & Dentist
                            </p>
                          </div>
                        </li>
                        <li className="step">
                          <div className="mt-1">
                            <span className="text-xs font-medium uppercase tracking-tight text-gray-400">
                              Step 2
                            </span>
                            <p className="text-sm font-semibold leading-tight tracking-tight">
                              Basic Information
                            </p>
                          </div>
                        </li>
                        <li className="step">
                          <div className="mt-1">
                            <span className="text-xs font-medium uppercase tracking-tight text-gray-400">
                              Step 3
                            </span>
                            <p className="text-sm font-semibold leading-tight tracking-tight">
                              Oral Hygiene habits
                            </p>
                          </div>
                        </li>
                      </ul>

                      {/* Tab Content */}
                      <div className="pb-2">
                        <TreatmentAndDentistPage {...selectedSlot} />
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="sticky bottom-0 flex flex-row-reverse border-t-[0.5px] bg-gray-50 px-6 py-4">
                      <button
                        type="button"
                        onClick={() => onClose(false)}
                        className="ml-3 inline-flex w-auto justify-center rounded-md bg-secondary px-12 py-2 text-sm font-semibold text-white shadow-sm hover:bg-secondary/80"
                      >
                        Next
                      </button>
                      <button
                        type="button"
                        data-autofocus
                        onClick={() => onClose(false)}
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

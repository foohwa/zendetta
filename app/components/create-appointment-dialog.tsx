import {
  CloseButton,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import {
  IconClipboardText,
  IconDental,
  IconSparkles,
  IconX,
} from "@tabler/icons-react";
import { TreatmentAndDentistPage } from "~/components/reservations/treatment-and-dentist";
import { EventCardEvent } from "~/components/add-event-card";
import { useState } from "react";
import { BasicInformation } from "~/components/reservations/basic-information";
import { OralHygieneQuestionnaire } from "~/components/reservations/oral-hygiene-questionnaire";
import { Stepper, StepProps } from "~/components/steppers";

const initialSteps: StepProps[] = [
  {
    icon: <IconDental />,
    title: "Treatment & Dentist",
    status: "started",
    isActive: true,
  },
  {
    icon: <IconClipboardText />,
    title: "Basic Information",
    status: "pending",
    isActive: false,
  },
  {
    icon: <IconSparkles />,
    title: "Oral Hygiene habits",
    status: "pending",
    isActive: false,
  },
];

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
  const MIN_STEP = 1;
  const MAX_STEP = 3;
  const [step, setStep] = useState(MIN_STEP);
  // const [steps, setSteps] = useState(initialSteps);

  const nextStep = () => {
    setStep((prevStep) => Math.min(prevStep + 1, MAX_STEP));
  };

  const prevStep = () => {
    setStep((prevStep) => Math.max(prevStep - 1, MIN_STEP));
  };

  const renderForm = (step: number) => {
    switch (step) {
      case 1:
        return <TreatmentAndDentistPage {...selectedSlot} />;
      case 2:
        return <BasicInformation />;
      case 3:
        return <OralHygieneQuestionnaire />;
      default:
        return null;
    }
  };

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
                      {/* <Stepper2 step={step} /> */}

                      <Stepper steps={initialSteps} currentStep={step} />
                      {/* Tab Content */}
                      <div className="mt-12 pb-2">{renderForm(step)}</div>
                    </div>

                    {/* Footer */}
                    <div className="sticky bottom-0 flex flex-row-reverse gap-3 border-t-[0.5px] bg-gray-50 px-6 py-4">
                      {step === MAX_STEP ? (
                        <button
                          type="button"
                          onClick={() => nextStep()}
                          className="inline-flex w-auto justify-center rounded-md bg-secondary px-12 py-2 text-sm font-semibold text-white shadow-sm hover:bg-secondary/80"
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => nextStep()}
                          className="inline-flex w-auto justify-center rounded-md bg-secondary px-12 py-2 text-sm font-semibold text-white shadow-sm hover:bg-secondary/80"
                        >
                          Next
                        </button>
                      )}

                      {step >= 2 && (
                        <button
                          type="button"
                          data-autofocus
                          onClick={() => prevStep()}
                          className="inline-flex w-auto justify-center rounded-md bg-white px-10 py-2 text-sm font-semibold text-secondary shadow-sm ring-1 ring-inset ring-gray-500/15 hover:bg-gray-50"
                        >
                          Previous
                        </button>
                      )}
                      <button
                        type="button"
                        data-autofocus
                        onClick={() => onClose(false)}
                        className="inline-flex w-full justify-center px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 sm:mt-0 sm:w-auto"
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

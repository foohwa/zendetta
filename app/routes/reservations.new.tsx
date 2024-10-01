import {
  CloseButton,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";
import {
  IconClipboardText,
  IconDental,
  IconSparkles,
  IconX,
} from "@tabler/icons-react";
import {
  TreatmentAndDentistFormSchema,
  TreatmentAndDentistPage,
} from "~/components/reservations/treatment-and-dentist";
import { useState } from "react";
import {
  BasicInformation,
  BasicInformationFormSchema,
} from "~/components/reservations/basic-information";
import {
  OralHygieneQuestionnaire,
  OralHygieneQuestionnaireSchema,
} from "~/components/reservations/oral-hygiene-questionnaire";
import { Stepper, StepProps } from "~/components/steppers";
import { RemixFormProvider, useRemixForm } from "remix-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@remix-run/react";
import { useNavigate } from "react-router";

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

export default function AddNewAppointment() {
  const MIN_STEP = 0;
  const MAX_STEP = 2;
  const [activeStep, setActiveStep] = useState(MIN_STEP);
  const navigate = useNavigate();

  const validationSchema = [
    TreatmentAndDentistFormSchema,
    BasicInformationFormSchema,
    OralHygieneQuestionnaireSchema,
  ];
  const currentValidationSchema = validationSchema[activeStep];

  const methods = useRemixForm({
    shouldUnregister: false,
    resolver: zodResolver(currentValidationSchema),
    mode: "onSubmit",
  });
  const { handleSubmit, reset, trigger, getValues } = methods;

  // const isLastStep = activeStep === steps.length - 1;

  const handleNext = async () => {
    console.log(getValues());
    // const isStepValid = await trigger();
    // console.log(isStepValid);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handlePrevious = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const nextStep = () => {
  //   setStep((prevStep) => Math.min(prevStep + 1, MAX_STEP));
  // };
  //
  // const prevStep = () => {
  //   setStep((prevStep) => Math.max(prevStep - 1, MIN_STEP));
  // };

  const renderStep = () => {
    switch (activeStep) {
      case 0:
        return <TreatmentAndDentistPage />;
      case 1:
        return <BasicInformation />;
      case 2:
        return <OralHygieneQuestionnaire />;
      default:
        return null;
    }
  };

  const onDismiss = () => {
    navigate("/reservations");
  };

  return (
    <Transition appear={true} show={true}>
      <Dialog className="relative z-10" onClose={onDismiss}>
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-400 bg-opacity-55 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-500 data-[leave]:duration-500 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 w-screen overflow-y-auto">
          <div className="fixed inset-y-0 right-0 flex min-h-full max-w-full pl-10">
            <DialogPanel
              transition
              className="relative w-screen max-w-xl transform py-8 pr-4 transition-all data-[closed]:translate-x-0 data-[enter]:translate-x-full data-[enter]:duration-500 data-[leave]:duration-500 data-[closed]:ease-in-out data-[enter]:ease-in-out data-[leave]:ease-in-out"
            >
              <div className="h-full overflow-y-auto rounded-2xl bg-white shadow-xl">
                <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white px-4 pb-3 pt-4 sm:px-6">
                  <DialogTitle className="text-lg font-semibold leading-6 text-gray-900">
                    Add patient to waitlist
                  </DialogTitle>

                  <CloseButton as="button">
                    <IconX className="text-gray-500" />
                  </CloseButton>
                </div>
                <RemixFormProvider {...methods}>
                  <Form>
                    <div className="relative mt-2 flex flex-1 flex-col px-4">
                      {/* Tab */}
                      <Stepper steps={initialSteps} currentStep={activeStep} />

                      {/* Tab Content */}
                      <div className="mt-12 pb-2">{renderStep()}</div>
                    </div>

                    {/* Footer */}
                    <div className="sticky bottom-0 flex flex-row-reverse gap-3 border-t-[0.5px] bg-gray-50 px-6 py-4 pb-6">
                      {activeStep === MAX_STEP ? (
                        <button
                          type="button"
                          // onClick={() => nextStep()}
                          className="inline-flex w-auto justify-center rounded-md bg-secondary px-12 py-2 text-sm font-semibold text-white shadow-sm hover:bg-secondary/80"
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => handleNext()}
                          className="inline-flex w-auto justify-center rounded-md bg-secondary px-12 py-2 text-sm font-semibold text-white shadow-sm hover:bg-secondary/80"
                        >
                          Next
                        </button>
                      )}

                      {activeStep >= 1 && (
                        <button
                          type="button"
                          data-autofocus
                          onClick={() => handlePrevious()}
                          className="inline-flex w-auto justify-center rounded-md bg-white px-10 py-2 text-sm font-semibold text-secondary shadow-sm ring-1 ring-inset ring-gray-500/15 hover:bg-gray-50"
                        >
                          Previous
                        </button>
                      )}
                      <button
                        type="button"
                        data-autofocus
                        onClick={onDismiss}
                        className="inline-flex w-full justify-center px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      >
                        Cancel
                      </button>
                    </div>
                  </Form>
                </RemixFormProvider>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

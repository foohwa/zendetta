import { IconHelp } from "@tabler/icons-react";
import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import { HygieneQuestionnaire } from "~/types/question";
import { questionnaire } from "~/resources/mock-data/hygiene-questionnaire";

export const OralHygieneQuestionnaire = () => {
  return (
    <>
      <div
        role="alert"
        className="alert mt-3 rounded-lg border-none bg-info/15 py-3.5 text-sm shadow-none"
      >
        <IconHelp className="size-5" />
        <span>Oral Hygiene Habits is optional, you can do it later</span>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-6">
        {questionnaire.map((questionnaire, index) => (
          <Questionnaire
            key={questionnaire.id}
            questionnaire={questionnaire}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

interface QuestionnaireProps {
  index: number;
  questionnaire: HygieneQuestionnaire;
}

const Questionnaire = ({ questionnaire, index }: QuestionnaireProps) => {
  return (
    <>
      <Field>
        <Label className="text-sm/6 font-medium tracking-tight">
          {`${index + 1}. ${questionnaire.question}`}
        </Label>
        <RadioGroup className="mt-2 grid grid-cols-2 gap-2">
          {questionnaire.options.map((option, index) => (
            <Radio
              key={index}
              value={option}
              className="group relative flex w-full cursor-pointer rounded-lg border border-gray-500/15 py-3 pl-3 pr-8 text-sm/6 text-black focus:outline-none data-[checked]:border-primary data-[checked]:bg-primary/15"
            >
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-4 w-4 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white group-data-[checked]:border-transparent group-data-[checked]:bg-primary group-data-[focus]:ring-2 group-data-[focus]:ring-primary group-data-[focus]:ring-offset-2"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </span>
              <span className="ml-3 block select-none text-sm font-medium text-gray-900">
                {option}
              </span>
            </Radio>
          ))}
        </RadioGroup>
      </Field>
    </>
  );
};

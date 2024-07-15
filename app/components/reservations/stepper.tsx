import { cn } from "~/lib/util";

interface StepperProps {
  step: number;
}

export const Stepper = ({ step }: StepperProps) => {
  return (
    <ul className="steps my-4">
      <li className={cn(step && "step-primary", "step")}>
        <div className="mt-1">
          <span className="text-xs font-medium uppercase tracking-tight text-gray-400">
            Step 1
          </span>
          <p className="text-sm font-semibold leading-tight tracking-tight">
            Treatment & Dentist
          </p>
        </div>
      </li>
      <li className={cn(step >= 2 && "step-primary", "step")}>
        <div className="mt-1">
          <span className="text-xs font-medium uppercase tracking-tight text-gray-400">
            Step 2
          </span>
          <p className="text-sm font-semibold leading-tight tracking-tight">
            Basic Information
          </p>
        </div>
      </li>
      <li className={cn(step === 3 && "step-primary", "step")}>
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
  );
};

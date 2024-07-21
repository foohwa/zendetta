import React, { cloneElement, ReactElement, FC } from "react";
import { IconCheck, IconMoodSadDizzy } from "@tabler/icons-react";
import { cn } from "~/lib/util";

type StepStatus = "completed" | "error" | "started" | "pending";

interface InternalStepProps {
  icon: ReactElement;
  title: string;
  status: StepStatus;
  isActive: boolean;
  isLast: boolean;
  index: number;
}

export type StepProps = Omit<InternalStepProps, "isLast" | "index">;

const Step: FC<InternalStepProps> = ({
  icon,
  title,
  status,
  isActive,
  isLast,
  index,
}) => {
  const getStatusColor = (): string => {
    switch (status) {
      case "completed":
      case "error":
        return "text-white";
      default:
        return "text-gray-300";
    }
  };

  const getStatusBgColor = (): string => {
    switch (status) {
      case "completed":
        return "bg-green-500 border-transparent";
      case "error":
        return "bg-red-500 border-transparent";
      default:
        return "";
    }
  };

  const getStrokeColor = (): string => {
    switch (status) {
      case "completed":
        return "w-full bg-green-500";
      case "error":
        return "w-full bg-red-500";
      case "started":
        return "w-1/2 bg-blue-600 [&:not(:nth-last-child(n+2))]:delay-200";
      default:
        return "w-0 bg-blue-600";
    }
  };

  const getIcon = (): ReactElement => {
    switch (status) {
      case "completed":
        return <IconCheck />;
      case "error":
        return <IconMoodSadDizzy />;
      default:
        return icon;
    }
  };

  return (
    <div className={cn("flex items-center", !isLast && "w-full")}>
      <div className="relative flex items-center">
        <div
          className={cn(
            "size-10 rounded-full border-2 py-1.5 transition duration-500 ease-in-out",
            isActive
              ? "border-white bg-blue-600 outline-dashed outline-2 outline-offset-2 outline-blue-500"
              : getStatusBgColor(),
          )}
        >
          {cloneElement(getIcon(), {
            className: cn(
              "w-full h-full",
              isActive
                ? "fill-transparent stroke-white text-blue-600"
                : getStatusColor(),
            ),
          })}
        </div>
        <div
          className={cn(
            "absolute top-1 -ml-12 mt-12 w-36 text-center",
            // isActive && "text-blue-600",
          )}
        >
          <span className="text-xs font-medium uppercase tracking-tight text-gray-400">
            Step {index}
          </span>
          <p className="text-sm font-semibold leading-tight tracking-tight">
            {title}
          </p>
        </div>
      </div>
      {!isLast && (
        <div className="mx-6 h-[4px] flex-1 rounded bg-gray-200">
          <div
            className={cn(
              "h-[4px] rounded-full transition-all duration-500 ease-in-out",
              getStrokeColor(),
            )}
          ></div>
        </div>
      )}
    </div>
  );
};

export interface StepperProps {
  currentStep: number;
  steps: StepProps[];
}

export const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <div className="m-3 mt-0 flex items-center justify-center px-16 py-4">
      {steps.map((step, index) => {
        const status = getStepStatus(index, currentStep);
        const isActive = isStepActive(index, currentStep);

        return (
          <Step
            key={index}
            icon={step.icon}
            title={step.title}
            status={status}
            isActive={isActive}
            isLast={index === steps.length - 1}
            index={index}
          />
        );
      })}
    </div>
  );
};

const getStepStatus = (index: number, currentStep: number): StepStatus => {
  if (index < currentStep) {
    return "completed";
  } else if (index === currentStep) {
    return "started";
  } else {
    return "pending";
  }
};

const isStepActive = (index: number, currentStep: number): boolean => {
  return index === currentStep;
};

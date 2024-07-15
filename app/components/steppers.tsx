import { cloneElement } from "react";
import { cn } from "~/lib/util";

const Step = ({ icon, title, status, isActive, isLast }) => {
  const getStatusColor = () => {
    switch (status) {
      case "completed":
        return "text-green-500";
      case "error":
        return "text-red-500";
      default:
        return "text-gray-300";
    }
  };

  return (
    <div className={`flex items-center ${!isLast && "w-full"}`}>
      <div className={`relative flex items-center`}>
        <div
          className={`size-10 rounded-full border-2 py-1.5 transition duration-500 ease-in-out ${
            isActive
              ? "border-white bg-blue-600 outline-dashed outline-2 outline-offset-2 outline-blue-500"
              : getStatusColor()
          }`}
        >
          {cloneElement(icon, {
            className: `w-full h-full text-gray-400 ${isActive ? "fill-white text-blue-600" : getStatusColor()}`,
          })}
        </div>
        <div
          className={`absolute top-0 -ml-10 mt-12 w-32 text-center text-xs font-medium ${
            isActive ? "text-blue-600" : "text-gray-500"
          }`}
        >
          {title}
        </div>
      </div>
      {!isLast && (
        <div className={`mx-6 h-[4px] flex-1 rounded bg-gray-200`}>
          <div
            className={cn(
              "h-[4px] rounded-full transition-all duration-500 ease-in-out",
              status === "completed"
                ? "w-full bg-green-500"
                : "w-1/2 bg-blue-600",
            )}
          ></div>
        </div>
      )}
    </div>
  );
};

export const Stepper2 = ({ steps }) => {
  return (
    <div className="flex items-center justify-center p-8">
      {steps.map((step, index) => (
        <Step
          key={index}
          icon={step.icon}
          title={step.title}
          status={step.status}
          isActive={step.isActive}
          isLast={index === steps.length - 1}
        />
      ))}
    </div>
  );
};

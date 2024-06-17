import { ToolbarProps } from "react-big-calendar";
import { cn } from "~/lib/util";
import { format } from "date-fns";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

export const CustomCalendarToolbar = ({
  date,
  view,
  onView,
  onNavigate,
}: ToolbarProps) => {
  return (
    <div className="mb-4 flex items-center justify-center gap-2">
      <div className="flex items-center justify-center gap-1">
        <button
          className="btn btn-primary btn-sm"
          onClick={() => onNavigate("TODAY")}
        >
          Today
        </button>
        <button
          className="btn btn-ghost btn-sm px-1"
          onClick={() => onNavigate("PREV")}
        >
          <span>
            <IconChevronLeft />
          </span>
        </button>
        <button
          className="btn btn-ghost btn-sm px-1"
          onClick={() => onNavigate("NEXT")}
        >
          <IconChevronRight />
        </button>
      </div>
      <div className="flex items-center justify-center">
        <p className="inline-block w-[160px] text-center text-lg font-semibold tracking-tight">
          {format(date, "EEE, dd MMM yyyy")}
        </p>
        <div className="divider divider-horizontal"></div>
        <div role="tablist" className="tabs-boxed tabs tabs-sm">
          <button
            role="tab"
            className={cn("tab px-4", view === "day" ? "tab-active" : "")}
            onClick={() => onView("day")}
          >
            Day
          </button>
          <button
            role="tab"
            className={cn("tab px-4", view === "week" ? "tab-active" : "")}
            onClick={() => onView("week")}
          >
            Week
          </button>
        </div>
      </div>
    </div>
  );
};

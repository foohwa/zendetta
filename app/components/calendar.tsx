import {
  Calendar,
  CalendarProps,
  dateFnsLocalizer,
  Formats,
} from "react-big-calendar";
// import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import { enUS } from "date-fns/locale/en-US";
import { format, getDay, parse, startOfWeek } from "date-fns";
import { useMemo } from "react";
import { AppointmentCalendarHeader } from "~/types";

const locales = {
  "en-US": enUS,
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export type BigCalendarProps<T extends object, R extends object> = Omit<
  CalendarProps<T, R>,
  "localizer"
>;

// const DnDCalendar = withDragAndDrop(Calendar);
export const BigCalendar = <T extends object, R extends object>(
  props: BigCalendarProps<T, R>,
) => {
  const { formats } = useMemo<{ formats: Formats }>(
    () => ({
      formats: {
        timeGutterFormat: (date, culture, localizer) => {
          if (!localizer) {
            return "";
          }

          return localizer.format(date, "ha", culture).toLowerCase();
        },
      },
    }),
    [],
  );

  return (
    <Calendar
      style={{ height: "85vh", width: "100%" }}
      {...props}
      formats={formats}
      localizer={localizer}
    />
  );
};

export const CustomTimeGutterHeader = () => {
  return (
    <>
      GMT
      <br />
      +8:00
    </>
  );
};

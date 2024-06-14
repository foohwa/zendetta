import { Calendar, CalendarProps, dateFnsLocalizer } from "react-big-calendar";
// import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import { enUS } from "date-fns/locale/en-US";
import { format, getDay, parse, startOfWeek } from "date-fns";
import { useMemo } from "react";

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

// const DnDCalendar = withDragAndDrop(Calendar);
export const BigCalendar = (props: Omit<CalendarProps, "localizer">) => {
  // TDOD: Add type to format function
  const { formats } = useMemo(
    () => ({
      formats: {
        timeGutterFormat: (date, culture, localizer) =>
          localizer.format(date, "ha", culture).toLowerCase(),
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

import { Calendar, CalendarProps, dateFnsLocalizer } from "react-big-calendar";
// import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import { enUS } from "date-fns/locale/en-US";
import { format, getDay, parse, startOfWeek } from "date-fns";

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
  return (
    <Calendar
      style={{ height: "85vh", width: "100%" }}
      {...props}
      localizer={localizer}
    />
  );
};

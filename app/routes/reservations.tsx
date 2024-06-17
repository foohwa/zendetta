import resourcesEvents, {
  ReservationHeader,
} from "~/resources/resourcesEvents";
import "../styles/calendar.css";
import { Components } from "react-big-calendar";
import { AppointmentCalendarHeader } from "~/types";
import {
  AppointmentCardComponent,
  BigCalendar,
  CustomCalendarToolbar,
  CustomTimeGutterHeader,
  DoctorResourceHeader,
} from "~/components";

export default function Reservations() {
  const components: Components = {
    event: ({ event }) => {
      return <AppointmentCardComponent {...event.resource.appointment} />;
    },
    resourceHeader: ({ resource }) => {
      const props = resource as AppointmentCalendarHeader;
      return <DoctorResourceHeader {...props} />;
    },
    toolbar: (toolbarProps) => {
      return <CustomCalendarToolbar {...toolbarProps} />;
    },
    timeGutterHeader: () => {
      return <CustomTimeGutterHeader />;
    },
  };

  return (
    <>
      <div>
        <BigCalendar
          views={["day", "week"]}
          defaultView="day"
          events={resourcesEvents.events}
          resources={ReservationHeader}
          min={new Date(2024, 1, 0, 8, 0, 0)}
          max={new Date(2024, 1, 0, 19, 0, 0)}
          components={components}
        />
      </div>
    </>
  );
}

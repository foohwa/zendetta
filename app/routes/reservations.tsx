import resourcesEvents, {
  BackgroundEvents,
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
  OnLeaveCard,
} from "~/components";
import { ReactElement, useState } from "react";
import { isSameHour, isSameMinute, set } from "date-fns";
import { BreakTimeCard } from "~/components/break-time-card";
import { AddEventCard } from "~/components/add-event-card";

type TimeSlotWrapperProps = {
  children: ReactElement;
  value: Date;
  resource: string;
};

export default function Reservations() {
  const [events, setEvents] = useState(resourcesEvents.events);

  const components: Components = {
    event: ({ event }) => {
      if (!event.resource) {
        return;
      }

      if (event.title === "ON_LEAVE") {
        return <OnLeaveCard />;
      }
      return <AppointmentCardComponent {...event.resource.appointment} />;
    },
    resourceHeader: ({ resource }) => {
      const props = resource as AppointmentCalendarHeader;
      return <DoctorResourceHeader {...props} />;
    },
    toolbar: (toolbarProps) => {
      return <CustomCalendarToolbar {...toolbarProps} events={events} />;
    },
    timeSlotWrapper: (props) => {
      // if (props.children.props.children?.props?.className !== "rbc-label") {
      //   console.log(props);
      // }
      // Library didn't typed timeSlotWrapper
      // eslint-disable-next-line react/prop-types
      const {
        children,
        value: selectedDate,
        resource,
      }: TimeSlotWrapperProps = props as TimeSlotWrapperProps;

      const breakTime = set(selectedDate, {
        hours: 13,
        minutes: 0,
        seconds: 0,
      });

      const halfBreakTime = set(selectedDate, {
        hours: 13,
        minutes: 30,
        seconds: 0,
      });

      const isSameHourAndMin = (leftDate: Date, rightDate: Date): boolean => {
        return (
          isSameHour(leftDate, rightDate) && isSameMinute(leftDate, rightDate)
        );
      };

      if (resource && isSameHourAndMin(selectedDate, breakTime)) {
        return <BreakTimeCard />;
      }

      // This is a hack to remove the 2nd time slot (30min) from the slot
      if (resource && isSameHourAndMin(selectedDate, halfBreakTime)) {
        return null;
      }

      if (resource) {
        // TODO - now find a way to only render one components in the timeslot instead of two
        return <AddEventCard />;
      }

      return children;
    },
    timeGutterHeader: () => {
      return <CustomTimeGutterHeader />;
    },
  };

  return (
    <>
      <div>
        <BigCalendar
          className="overscroll-none"
          views={["day", "week"]}
          defaultView="day"
          events={events}
          backgroundEvents={BackgroundEvents}
          resources={ReservationHeader}
          min={new Date(2024, 1, 0, 8, 0, 0)}
          max={new Date(2024, 1, 0, 19, 0, 0)}
          components={components}
          onSelectEvent={(event, e) => {
            // console.log(event);
            // console.log(e);
          }}
        />
      </div>
    </>
  );
}

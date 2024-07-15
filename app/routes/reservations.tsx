import {
  appointmentEvents,
  BackgroundEvents,
  ReservationHeader,
} from "~/resources/resourcesEvents";
import "../styles/calendar.css";
import { Components } from "react-big-calendar";
import { Appointment, AppointmentCalendarHeader } from "~/types";
import {
  AppointmentCardComponent,
  BigCalendar,
  CustomCalendarToolbar,
  CustomTimeGutterHeader,
  DoctorResourceHeader,
  OnLeaveCard,
} from "~/components";
import { ReactElement, useState } from "react";
import { isSameHour, isSameMinute, parseISO, set } from "date-fns";
import { BreakTimeCard } from "~/components/break-time-card";
import {
  AddEventTimeslotCard,
  EventCardEvent,
} from "~/components/add-event-card";
import { CreateAppointmentDialogComponent } from "~/components/create-appointment-dialog";

type TimeSlotWrapperProps = {
  children: ReactElement;
  value: Date;
  resource: string;
};

const initialState = {
  selectedSlot: {
    selectedDate: "2024-07-14T14:00:00+08:00",
    selectedDentistId: "42",
  },
};

export default function Reservations() {
  const [events, setEvents] = useState([
    ...appointmentEvents,
    ...BackgroundEvents,
  ]);
  const [open, setOpen] = useState(true);
  const [selectedSlot, setSelectedSlot] = useState<EventCardEvent>(
    initialState.selectedSlot,
  );

  const onAddEvent = ({ selectedDate, selectedDentistId }: EventCardEvent) => {
    setSelectedSlot({ selectedDate, selectedDentistId });
    setOpen(true);
  };

  const components: Components<Appointment, AppointmentCalendarHeader> = {
    event: ({ event, ...rest }) => {
      // console.log(event);
      // console.log(event);
      // if (!event) {
      //   return;
      // }

      if (!event.treatment) {
        return <OnLeaveCard />;
      }
      return <AppointmentCardComponent {...event} />;
    },
    resourceHeader: ({ resource }) => {
      return <DoctorResourceHeader {...resource} />;
    },
    toolbar: (toolbarProps) => {
      return <CustomCalendarToolbar {...toolbarProps} events={events} />;
    },
    timeSlotWrapper: (props) => {
      // if (props.children.props.children?.props?.className !== "rbc-label") {
      //   console.log(props);
      // }
      // Library didn't typed timeSlotWrapper
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
        // return cloneElement(children, {
        //   children: (
        //     <AddEventTimeslotCard
        //       onClick={onAddEvent}
        //       resource={resource}
        //       value={selectedDate}
        //     />
        //   ),
        // });
        return (
          <AddEventTimeslotCard
            onClick={onAddEvent}
            resource={resource}
            value={selectedDate}
          />
        );
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
          startAccessor={(appointment) => parseISO(appointment.start)}
          endAccessor={(appointment) => parseISO(appointment.end)}
          titleAccessor={(appointment) => appointment.patientName}
          // backgroundEvents={BackgroundEvents}
          resources={ReservationHeader}
          resourceAccessor={(appointment) => appointment.dentistId}
          resourceIdAccessor="dentistId"
          resourceTitleAccessor="firstName"
          // allDayAccessor="status"
          min={new Date(2024, 1, 0, 8, 0, 0)}
          max={new Date(2024, 1, 0, 19, 0, 0)}
          components={components}
          onSelectEvent={(event, e) => {
            // console.log(event);
            // console.log(e);
          }}
        />
        {open && (
          <CreateAppointmentDialogComponent
            open={open}
            selectedSlot={selectedSlot}
            onClose={(value) => setOpen(value)}
          />
        )}
      </div>
    </>
  );
}

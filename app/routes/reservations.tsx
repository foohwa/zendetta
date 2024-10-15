import "../styles/calendar.css";
import { Components } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { AppointmentWithDentistAndPatient } from "~/types";
import {
  AppointmentCardComponent,
  BigCalendar,
  CustomCalendarToolbar,
  CustomTimeGutterHeader,
  DoctorResourceHeader,
  OnLeaveCard,
} from "~/components";
import { ReactElement } from "react";
import { isSameHour, isSameMinute, parseISO, set } from "date-fns";
import { BreakTimeCard } from "~/components/break-time-card";
import {
  AddEventTimeslotCard,
  EventCardEvent,
} from "~/components/add-event-card";
import { useNavigate } from "react-router";
import { json, Outlet, useLoaderData } from "@remix-run/react";
import { getAllAppointments } from "~/db/queries/getAllAppointments";
import { Dentist } from "~/db/schema";
import { getDentistsWithAppointmentCount } from "~/db/queries/dentist";

type TimeSlotWrapperProps = {
  children: ReactElement;
  value: Date;
  resource: string;
};

export const loader = async () => {
  const allAppointments: AppointmentWithDentistAndPatient[] =
    await getAllAppointments();

  const allDentist = await getDentistsWithAppointmentCount();

  return json({ appointments: allAppointments, dentists: allDentist });
};

export default function Reservations() {
  const { appointments, dentists } = useLoaderData<typeof loader>();

  const onAddEvent = ({ selectedDate, selectedDentistId }: EventCardEvent) => {
    navigate(
      `new?selectedDate=${encodeURIComponent(selectedDate)}&selectedDentistId=${selectedDentistId}`,
    );
  };
  const navigate = useNavigate();

  const components: Components<AppointmentWithDentistAndPatient, Dentist> = {
    event: ({ event, ...rest }) => {
      if (!event) {
        return;
      }

      if (!event.treatment) {
        return <OnLeaveCard />;
      }
      return <AppointmentCardComponent {...event} />;
    },
    resourceHeader: ({ resource }) => {
      return <DoctorResourceHeader totalOfTodayAppointment={5} {...resource} />;
    },
    toolbar: (toolbarProps) => {
      return <CustomCalendarToolbar {...toolbarProps} events={appointments} />;
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
      <Outlet />
      <div>
        <BigCalendar
          className="overscroll-none"
          views={["day", "week"]}
          defaultView="day"
          defaultDate={new Date(2024, 6, 21, 8, 0, 0)}
          events={appointments}
          startAccessor={(appointment) => parseISO(appointment.start)}
          endAccessor={(appointment) => parseISO(appointment.end)}
          titleAccessor={(appointment) => appointment.patient.firstName}
          // backgroundEvents={BackgroundEvents}
          resources={dentists}
          resourceAccessor={(appointment) => appointment.dentist.id}
          resourceIdAccessor="id"
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
      </div>
    </>
  );
}

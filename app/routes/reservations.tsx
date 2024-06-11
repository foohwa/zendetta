import { BigCalendar } from "~/components/calendar";
import { addHours, startOfHour } from "date-fns";
import resourcesEvents, {
  ReservationHeader,
} from "~/resources/resourcesEvents";
import "../styles/calendar.css";

export default function Reservations() {
  const endOfHour = (date: Date): Date => addHours(startOfHour(date), 1);
  const now = new Date();
  const start = endOfHour(now);
  const end = addHours(start, 2);

  return (
    <>
      Reservations pages
      <div>
        <BigCalendar
          views={["day", "week"]}
          defaultView="day"
          events={resourcesEvents.events}
          resources={ReservationHeader}
          min={new Date(2024, 1, 0, 8, 0, 0)}
          max={new Date(2024, 1, 0, 19, 0, 0)}
          // toolbar={false}
        />
      </div>
    </>
  );
}

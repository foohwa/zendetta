import { BigCalendar } from "~/components/calendar";
import { addHours, startOfHour } from "date-fns";
import resourcesEvents from "~/resources/resourcesEvents";

export default function Reservations() {
  const endOfHour = (date: Date): Date => addHours(startOfHour(date), 1);
  const now = new Date();
  const start = endOfHour(now);
  const end = addHours(start, 2);

  // const [events, setEvents] = useState<Event[]>([
  //   {
  //     title: "Learn cool stuff",
  //     start,
  //     end,
  //   },
  // ]);

  return (
    <>
      Reservations pages
      <div>
        <BigCalendar
          views={["day", "week"]}
          defaultView="day"
          events={resourcesEvents.events}
          resources={resourcesEvents.list}
        />
      </div>
    </>
  );
}

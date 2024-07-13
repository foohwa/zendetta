import { ReactNode } from "react";

type CalendarWrapper<T> = T extends object ? T : { value: T };

export interface CalendarEvent<T> {
  allDay?: boolean | undefined;
  title?: ReactNode | undefined;
  start?: Date | undefined;
  end?: Date | undefined;
  resource?: T;
}

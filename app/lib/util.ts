import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, addMinutes, setHours, setMinutes } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatString(input: string): string {
  // Split the input string by underscores
  const words = input.split("_");

  // Capitalize the first letter of each word and convert the rest to lowercase
  const formattedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
  );

  // Join the words with a space
  return formattedWords.join(" ");
}

export const generateTimeIntervals = (interval: number = 30): string[] => {
  const times: string[] = [];
  let currentTime = setMinutes(setHours(new Date(), 8), 0); // Start at 8:00 AM
  const endTime = setMinutes(setHours(new Date(), 19), 0); // End at 7:00 PM

  while (currentTime <= endTime) {
    times.push(format(currentTime, "hh.mm a"));
    currentTime = addMinutes(currentTime, interval);
  }

  return times;
};

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

// Suggestion: We may need to pass startTime and endTime dynamically
export const generateTimeIntervals = (
  interval: number = 30,
): { id: string; value: string }[] => {
  const times: { id: string; value: string }[] = [];
  let currentTime = setMinutes(setHours(new Date(), 8), 0); // Start at 8:00 AM
  const endTime = setMinutes(setHours(new Date(), 19), 0); // End at 7:00 PM

  while (currentTime <= endTime) {
    times.push({
      id: format(currentTime, "HHmm"),
      value: format(currentTime, "hh.mm a"),
    });
    currentTime = addMinutes(currentTime, interval);
  }

  return times;
};

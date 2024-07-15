import { HygieneQuestionnaire } from "~/types/question";

export const questionnaire: HygieneQuestionnaire[] = [
  {
    id: "q1",
    question: "When did you make the latest dental visit?",
    options: [
      "Less than 3 months",
      "More than 3 months ago",
      "1 year ago",
      "I don't remember",
    ],
  },
  {
    id: "q2",
    question: "What time did you start dental care?",
    options: [
      "Teenager",
      "About 20 years old",
      "About 30 years old",
      "After 30 years old",
    ],
  },
  {
    id: "q3",
    question: "How many times, in a day, do you wash your teeth?",
    options: ["Never", "Once", "Twice", "3 times"],
  },
  {
    id: "q4",
    question: "Did you use mouthwash?",
    options: ["Yes", "No"],
  },
  {
    id: "q5",
    question: "Do you use dental floss?",
    options: ["Yes", "No"],
  },
  {
    id: "q6",
    question: "How often do you change your toothbrush?",
    options: ["Every 3 months", "Every year", "Every 6 months", "As occur"],
  },
  {
    id: "q7",
    question: "How long do you take for oral hygiene?",
    options: [
      "Every 1 minute",
      "About 2 minutes",
      "More than 2 minutes",
      "I don't know",
    ],
  },
];

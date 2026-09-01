import { useContext } from "react";
import  QuizContext from "./QuizContext.js";

export function useQuizContext() {
  const context = useContext(QuizContext);

  if (!context) {
    throw new Error("useQuiz must be used in a QuizProvider");
  }

  return context;
}
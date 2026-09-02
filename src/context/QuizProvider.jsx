import QuizContext from "./QuizContext.js";
import { quizzes } from "../data/data.json";
import { useState } from "react";

function QuizProvider({ children }) {
  const [selectedQuizId, setSelectedQuizId] = useState(undefined);

  function selectQuiz(id) {
    setSelectedQuizId(id);
  }

  return (
    <QuizContext.Provider value={{ quizzes, selectedQuizId, selectQuiz}}>{children}</QuizContext.Provider>
  );
}

export default QuizProvider;

import QuizContext from "./QuizContext.js";
import { quizzes } from "../data/data.json";
import { useState } from "react";

function QuizProvider({ children }) {
  const [selectedQuizId, setSelectedQuizId] = useState(undefined);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  function selectQuiz(id) {
    setSelectedQuizId(id);
  }

  const selectedQuiz = quizzes[selectedQuizId] ?? undefined;
  const currentQuestion = selectedQuiz?.questions[currentQuestionIndex];
  const totalQuestions = selectedQuiz?.questions.length;


  return (
    <QuizContext.Provider value={{ quizzes, selectedQuizId, selectQuiz, currentQuestion, currentQuestionIndex, totalQuestions}}>{children}</QuizContext.Provider>
  );
}

export default QuizProvider;

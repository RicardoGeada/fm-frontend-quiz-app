import QuizContext from "./QuizContext.js";
import { quizzes } from "../data/data.json";
import { useState } from "react";

function QuizProvider({ children }) {
  const [selectedQuizId, setSelectedQuizId] = useState(undefined);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  function selectQuiz(id) {
    setSelectedQuizId(id);
  }

  function nextQuestion() {
    setCurrentQuestionIndex(prev => prev + 1);
  }

  const selectedQuiz = quizzes[selectedQuizId] ?? undefined;
  const currentQuestion = selectedQuiz?.questions[currentQuestionIndex];
  const totalQuestions = selectedQuiz?.questions.length;


  return (
    <QuizContext.Provider value={{ quizzes, selectedQuizId, selectQuiz, currentQuestion, currentQuestionIndex, totalQuestions, nextQuestion, selectedAnswer, setSelectedAnswer}}>{children}</QuizContext.Provider>
  );
}

export default QuizProvider;

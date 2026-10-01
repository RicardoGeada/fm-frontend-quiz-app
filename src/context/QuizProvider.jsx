import QuizContext from "./QuizContext.js";
import { quizzes } from "../data/data.json";
import { useState } from "react";

function QuizProvider({ children }) {
  const [selectedQuizId, setSelectedQuizId] = useState(undefined);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  function selectQuiz(id) {
    setSelectedQuizId(id);
  }

  function nextQuestion() {
    setCurrentQuestionIndex((prev) => prev + 1);
  }

  function increaseScore() {
    setScore(prev => prev + 1);
  }

  function playAgain() {
    setSelectedQuizId(undefined);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
  }

  const selectedQuiz = quizzes[selectedQuizId] ?? undefined;
  const currentQuestion = selectedQuiz?.questions[currentQuestionIndex];
  const totalQuestions = selectedQuiz?.questions.length;

  return (
    <QuizContext.Provider
      value={{
        quizzes,
        selectedQuizId,
        selectQuiz,
        currentQuestion,
        currentQuestionIndex,
        totalQuestions,
        nextQuestion,
        selectedAnswer,
        setSelectedAnswer,
        score,
        increaseScore,
        playAgain,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export default QuizProvider;

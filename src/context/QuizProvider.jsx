import QuizContext from "./QuizContext.js";
import { quizzes } from "../data/data.json";
import { useEffect, useState } from "react";

const STORAGE_KEY = "quizState";

const initialQuizState = {
  selectedQuizId: undefined,
  currentQuestionIndex: 0,
  selectedAnswer: null,
  score: 0,
};

function QuizProvider({ children }) {
  const [quizState, setQuizState] = useState(() => {
    const savedState = localStorage.getItem(STORAGE_KEY);

    return savedState ? JSON.parse(savedState) : initialQuizState;
  });

  const { selectedQuizId, currentQuestionIndex, selectedAnswer, score } =
    quizState;

  const selectedQuiz = quizzes[selectedQuizId] ?? undefined;
  const currentQuestion = selectedQuiz?.questions[currentQuestionIndex];
  const totalQuestions = selectedQuiz?.questions.length;

  const hasValidQuizState =
    selectedQuizId !== undefined &&
    selectedQuiz !== undefined &&
    currentQuestionIndex >= 0 &&
    currentQuestionIndex < totalQuestions;


  function selectQuiz(id) {
    setQuizState({
      selectedQuizId: id,
      currentQuestionIndex: 0,
      selectedAnswer: null,
      score: 0,
    });
  }


  function setSelectedAnswer(answer) {
    setQuizState((prev) => ({
      ...prev,
      selectedAnswer: answer,
    }));
  }


  function nextQuestion() {
    setQuizState((prev) => ({
      ...prev,
      currentQuestionIndex: prev.currentQuestionIndex + 1,
      selectedAnswer: null,
    }));
  }


  function increaseScore() {
    setQuizState((prev) => ({
      ...prev,
      score: prev.score + 1,
    }));
  }


  function resetQuiz() {
    setQuizState(initialQuizState);
    localStorage.removeItem(STORAGE_KEY);
  }


  useEffect(() => {
    if(quizState.selectedQuizId === undefined) return;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(quizState));
  }, [quizState])

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
        resetQuiz,
        hasValidQuizState
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export default QuizProvider;

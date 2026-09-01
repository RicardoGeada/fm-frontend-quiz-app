import QuizContext from "./QuizContext.js";
import { quizzes } from "../data/data.json";

function QuizProvider({ children }) {
  return (
    <QuizContext.Provider value={{ quizzes }}>{children}</QuizContext.Provider>
  );
}

export default QuizProvider;

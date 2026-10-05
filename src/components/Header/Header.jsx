import "./Header.css";
import QuizInfo from "./QuizInfo/QuizInfo";
import ThemeToggle from "./ThemeToggle/ThemeToggle";
import { useQuizContext } from "./../../context/useQuizContext";

function Header() {
  const { selectedQuiz } = useQuizContext();

  return (
    <header className="header">
      {selectedQuiz && <QuizInfo />}
      <div className="header__theme-toggle">
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;

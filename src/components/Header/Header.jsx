import "./Header.css";
import QuizInfo from "./QuizInfo/QuizInfo";
import ThemeToggle from "./ThemeToggle/ThemeToggle";

function Header() {
  return (
    <header className="header">
      <QuizInfo />
      <ThemeToggle />
    </header>
  );
}

export default Header;

import "./Start.css";
import Header from "../../components/Header/Header";
import ButtonWithIcon from "../../components/ButtonWithIcon/ButtonWithIcon";
import html from "../../assets/images/icon-html.svg";
import css from "../../assets/images/icon-css.svg";
import javascript from "../../assets/images/icon-js.svg";
import accessibillity from "../../assets/images/icon-accessibility.svg";
import { useQuizContext } from "../../context/useQuizContext";
import { useNavigate } from "react-router-dom";

function Start() {
  const navigate = useNavigate();
  const { quizzes, selectQuiz } = useQuizContext();

  const quizIcons = {
    HTML: { icon: html, color: "var(--color-orange-50)" },
    CSS: { icon: css, color: "var(--color-green-100)" },
    JavaScript: { icon: javascript, color: "var(--color-blue-50)" },
    Accessibility: { icon: accessibillity, color: "var(--color-purple-100)" },
  };

  function handleQuizSelect(id) {
    selectQuiz(id);
    navigate("/quiz");
  }

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <main className="page__main">
          <div className="headline">
            <h1 className="headline__title text-preset-2">
              <span className="text-preset-2--light">Welcome to the</span>
              <span>Frontend Quiz!</span>
            </h1>
            <span className="headline__subtitle text-preset-5">
              Pick a subject to get started.
            </span>
          </div>
          <div className="quiz-buttons">
            {quizzes.map((quiz, index) => (
              <ButtonWithIcon
                key={quiz.title}
                text={quiz.title}
                icon={quizIcons[quiz.title].icon}
                iconBackgroundColor={quizIcons[quiz.title].color}
                onClick={() => handleQuizSelect(index)}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Start;

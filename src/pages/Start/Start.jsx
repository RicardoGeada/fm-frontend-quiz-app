import "./Start.css";
import Header from "../../components/Header/Header";
import ButtonWithIcon from "../../components/ButtonWithIcon/ButtonWithIcon";
import { useQuizContext } from "../../context/useQuizContext";
import { useNavigate } from "react-router-dom";
import { quizIcons } from "../../data/quizIcons";
import { useEffect } from "react";

function Start() {
  const navigate = useNavigate();
  const { quizzes, selectQuiz, resetQuiz } = useQuizContext();

  useEffect(() => {
    resetQuiz();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


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

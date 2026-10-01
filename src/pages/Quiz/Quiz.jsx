import "./Quiz.css";
import Header from "../../components/Header/Header";
import AnswerOption from "../../components/AnswerOption/AnswerOption";
import errorIcon from "../../assets/images/icon-error.svg";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { useQuizContext } from "../../context/useQuizContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Quiz() {
  const navigate = useNavigate();
  const {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    nextQuestion,
    selectedAnswer,
    setSelectedAnswer,
    increaseScore,
  } = useQuizContext();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showError, setShowError] = useState(false);

  function handleSubmit(e) {
    // prevent reloading
    e.preventDefault();

    // read data
    const form = e.target;
    const formData = new FormData(form);
    const option = formData.get("option");

    if (option === null) {
      setShowError(true);
    } else {
      setShowError(false);
      if (selectedAnswer === currentQuestion.answer) increaseScore();
      setIsSubmitted(true);
    }
  }

  function handleNextQuestion() {
    setShowError(false);
    setIsSubmitted(false);
    setSelectedAnswer(null);

    if (currentQuestionIndex === totalQuestions - 1) {
      navigate("/score");
      return;
    }

    nextQuestion();
  }

  return (
    <div className="quiz-page">
      <div className="quiz-page__content">
        <Header />
        <main className="quiz">
          <section className="quiz__question-section">
            <div className="quiz__question-content">
              <p className="quiz__progress-text text-preset-5">
                Question {currentQuestionIndex + 1} of {totalQuestions}
              </p>

              <p className="quiz__question text-preset-3">
                {currentQuestion?.question}
              </p>
            </div>

            <div
              className="quiz__progress-bar"
              style={{
                "--progress": `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`,
              }}
            ></div>
          </section>

          <form className="quiz__form" onSubmit={handleSubmit}>
            <div className="quiz__answers">
              {currentQuestion?.options.map((option, index) => {
                return (
                  <AnswerOption
                    key={index}
                    letter={"abcdefghijklmnopqrstuvwxyz".split("")[index].toUpperCase()}
                    answer={option}
                    isSubmitted={isSubmitted}
                    isSelected={selectedAnswer === option}
                    isRightAnswer={option === currentQuestion.answer}
                    onSelect={() => setSelectedAnswer(option)}
                  />
                );
              })}
            </div>
            <PrimaryButton
              key={isSubmitted ? "next" : "submit"}
              type={isSubmitted ? "button" : "submit"}
              onClick={isSubmitted ? handleNextQuestion : undefined}
            >
              {isSubmitted ? "Next Question" : "Submit Answer"}
            </PrimaryButton>

            {/* No Answer - Notification */}
            {showError && (
              <div className="no-answer-notification text-preset-5 text-preset-5--regular">
                <img src={errorIcon} alt="" />
                Please select an answer
              </div>
            )}
          </form>
        </main>
      </div>
    </div>
  );
}

export default Quiz;

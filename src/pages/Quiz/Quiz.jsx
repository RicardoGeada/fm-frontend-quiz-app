import "./Quiz.css";
import Header from "../../components/Header/Header";
import AnswerOption from "../../components/AnswerOption/AnswerOption";
import errorIcon from "../../assets/images/icon-error.svg";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { useQuizContext } from "../../context/useQuizContext";
import { useState } from "react";

function Quiz() {
  const {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    nextQuestion,
  } = useQuizContext();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showError, setShowError] = useState(false);

  function handleSubmit(e) {
    console.log("SUBMIT");
    // prevent reloading
    e.preventDefault();

    // read data
    const form = e.target;
    const formData = new FormData(form);
    const option = formData.get("option");
    console.log(`Your answer was: ${option}`);

    if (option === null) {
      setShowError(true);
    } else {
      setShowError(false);
      setIsSubmitted(true);
      form.reset();
    }
  }

  function handleNextQuestion() {
    setShowError(false);
    nextQuestion();
    setIsSubmitted(false);
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
                    letter={"abcdefghijklmnopqrstuvwxyz"
                      .split("")[index].toUpperCase()}
                    answer={option}
                    isSubmitted={isSubmitted}
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

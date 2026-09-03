import "./Quiz.css";
import Header from "../../components/Header/Header";
import AnswerOption from "../../components/AnswerOption/AnswerOption";
import errorIcon from "../../assets/images/icon-error.svg";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { useQuizContext } from "../../context/useQuizContext";

function Quiz() {
  const { currentQuestion, currentQuestionIndex, totalQuestions } = useQuizContext();

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
              style={{ "--progress": `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
            ></div>
          </section>

          <form className="quiz__form">
            <div className="quiz__answers">
              {currentQuestion?.options.map( (option, index) => {
                return <AnswerOption key={index} letter={"abcdefghijklmnopqrstuvwxyz".split("")[index].toUpperCase()} answer={option}/>
              })}
            </div>
              <PrimaryButton type="button" >Submit Answer</PrimaryButton>
              {/* No Answer - Notification */}
              <div className="no-answer-notification text-preset-5 text-preset-5--regular">
                <img src={errorIcon} alt="" />
                Please select an answer
              </div>
          </form>
        </main>
      </div>
    </div>
  );
}

export default Quiz;

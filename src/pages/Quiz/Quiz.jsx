import "./Quiz.css";
import Header from "../../components/Header/Header";
import AnswerOption from "../../components/AnswerOption/AnswerOption";
import errorIcon from "../../assets/images/icon-error.svg";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

function Quiz() {

  return (
    <div className="quiz-page">
      <div className="quiz-page__content">
        <Header />
        <main className="quiz">
          <section className="quiz__question-section">
            <div className="quiz__question-content">
              <p className="quiz__progress-text text-preset-5">
                Question 6 of 10
              </p>

              <p className="quiz__question text-preset-3">
                Which of these color contrast ratios defines the minimum WCAG
                2.1 Level AA requirement for normal text?
              </p>
            </div>

            <div
              className="quiz__progress-bar"
              style={{ "--progress": "60%" }}
            ></div>
          </section>

          <form className="quiz__form">
            <div className="quiz__answers">
              <AnswerOption
                letter={"A"}
                answer={"4.5 : 1"}
                isSubmitted={true}
                isRightAnswer
              />
              <AnswerOption letter={"B"} answer={"3 : 1"} isSubmitted={true} />
              <AnswerOption
                letter={"C"}
                answer={"2.5 : 1"}
                isSubmitted={true}
                isChosenAnswer
              />
              <AnswerOption letter={"D"} answer={"5 : 1"} isSubmitted={true} />
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

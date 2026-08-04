import "./QuizInfo.css";
import quizIcon from "./../../../assets/images/icon-accessibility.svg";

function QuizInfo() {
  return (
    <div className="quiz-info">
      <div className="quiz-info__icon-container">
        <img className="quiz-info__icon" src={quizIcon} alt="quiz" />
      </div>
      <h2 className="quiz-info__name text-preset-4">Accessibility</h2>
    </div>
  );
}

export default QuizInfo;

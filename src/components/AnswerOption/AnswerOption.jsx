import "./AnswerOption.css";
import correct from "./../../assets/images/icon-correct.svg";
import incorrect from "./../../assets/images/icon-incorrect.svg";

function AnswerOption({
  letter,
  answer,
  isChosenAnswer = false,
  isSubmitted = false,
  isRightAnswer = false,
}) {

  return (
    <label
      className={`answer-option ${isChosenAnswer && (isRightAnswer ? "answer-option--right" : "answer-option--wrong")} text-preset-4`}
    >
      <input type="radio" name="option" disabled={isSubmitted} />
      <div className="answer-option__letter">{letter}</div>
      <p>{answer}</p>
      {isSubmitted &&
        (isRightAnswer ? (
          <img className="answer-option__icon" src={correct} alt="" />
        ) : isChosenAnswer ? (
          <img className="answer-option__icon" src={incorrect} alt="" />
        ) : null)}
    </label>
  );
}

export default AnswerOption;

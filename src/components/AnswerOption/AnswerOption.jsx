import "./AnswerOption.css";
import correct from "./../../assets/images/icon-correct.svg";
import incorrect from "./../../assets/images/icon-incorrect.svg";

function AnswerOption({
  letter,
  answer,
  isSelected = false,
  isSubmitted = false,
  isRightAnswer = false,
  onSelect,
}) {


  return (
    <label
      className={`answer-option ${isSubmitted ? isSelected && (isRightAnswer ? "answer-option--right" : "answer-option--wrong") : ""} text-preset-4`}
    >
      <input type="radio" name="option" value={answer} disabled={isSubmitted} checked={isSelected} onChange={onSelect}/>
      <div className="answer-option__letter">{letter}</div>
      <p>{answer}</p>
      {isSubmitted &&
        (isRightAnswer ? (
          <img className="answer-option__icon" src={correct} alt="" />
        ) : isSelected ? (
          <img className="answer-option__icon" src={incorrect} alt="" />
        ) : null)}
    </label>
  );
}

export default AnswerOption;

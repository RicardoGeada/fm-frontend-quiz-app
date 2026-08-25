import "./AnswerOption.css";
import correct from "./../../assets/images/icon-correct.svg";
// import incorrect from "./../../assets/images/icon-incorrect.svg";

function AnswerOption() {
  return (
    <label className="answer-option text-preset-4">
      <input type="radio" name="option" />
      <div className="answer-option__letter">A</div>
      <p>4.5 : 1</p>
      <img className="answer-option__icon" src={correct} alt="" />
      {/* <img className="answer-option__icon" src={incorrect} alt="" /> */}
    </label>
  );
}

export default AnswerOption;

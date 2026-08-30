import Header from "../../components/Header/Header";
import QuizInfo from "../../components/Header/QuizInfo/QuizInfo";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import "./Score.css";

function Score() {
  return (
    <div className="score-page">
      <div className="score-page__content">
        <Header />
        <main className="score-page__main">
          <p className="score-page__text">
            <span className="text-preset-2 text-preset-2--light">
              Quiz completed
            </span>
            <span className="text-preset-2">You scored ...</span>
          </p>
          <div className="score-page_container">
            <div className="score-board">
                <QuizInfo />
                <div className="score-board__container">
                    <span className="score-board__score text-preset-1">8</span>
                    <span className="score-board__total text-preset-5 text-preset-5--medium">out of 10</span>
                </div>
            </div>
            <PrimaryButton>Play Again</PrimaryButton>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Score;

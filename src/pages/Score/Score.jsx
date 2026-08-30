import Header from "../../components/Header/Header";
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
        </main>
      </div>
    </div>
  );
}

export default Score;

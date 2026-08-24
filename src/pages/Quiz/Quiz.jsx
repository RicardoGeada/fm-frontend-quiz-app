import "./Quiz.css";
import Header from "../../components/Header/Header";

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

            <div className="quiz__progress-bar" style={{"--progress": "60%"}}></div>
          </section>

          <form className="quiz__form">{/* Antworten */}</form>
        </main>
      </div>
    </div>
  );
}

export default Quiz;

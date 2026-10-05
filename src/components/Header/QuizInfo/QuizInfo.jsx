import "./QuizInfo.css";
import { quizIcons } from "../../../data/quizIcons";
import { useQuizContext } from "../../../context/useQuizContext";

function QuizInfo() {

  const {selectedQuiz} = useQuizContext();

  return (
    <div className="quiz-info">
      <div className="quiz-info__icon-container" style={{ backgroundColor: quizIcons[selectedQuiz.title].color }}>
        <img className="quiz-info__icon" src={quizIcons[selectedQuiz.title].icon} alt="quiz" />
      </div>
      <h2 className="quiz-info__name text-preset-4">{selectedQuiz.title}</h2>
    </div>
  );
}

export default QuizInfo;

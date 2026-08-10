import "./Start.css";
import Header from "../../components/Header/Header";
import ButtonWithIcon from "../../components/ButtonWithIcon/ButtonWithIcon";

function Start() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <main>
          <div className="headline">
            <h1 className="headline__title text-preset-2">
              <span className="text-preset-2--light">Welcome to the</span>
              <span>Frontend Quiz!</span>
            </h1>
            <span className="headline__subtitle text-preset-5">Pick a subject to get started.</span>
          </div>
          <div className="quiz-buttons">
            <ButtonWithIcon />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Start;

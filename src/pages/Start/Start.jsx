import "./Start.css";
import Header from "../../components/Header/Header";
import ButtonWithIcon from "../../components/ButtonWithIcon/ButtonWithIcon";
import html from "../../assets/images/icon-html.svg";
import css from "../../assets/images/icon-css.svg";
import javascript from "../../assets/images/icon-js.svg";
import accessibillity from "../../assets/images/icon-accessibility.svg";

function Start() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <main className="page__main">
          <div className="headline">
            <h1 className="headline__title text-preset-2">
              <span className="text-preset-2--light">Welcome to the</span>
              <span>Frontend Quiz!</span>
            </h1>
            <span className="headline__subtitle text-preset-5">Pick a subject to get started.</span>
          </div>
          <div className="quiz-buttons">
            <ButtonWithIcon icon={html} iconBackgroundColor={"var(--color-orange-50)"} text={"HTML"}/>
            <ButtonWithIcon icon={css} iconBackgroundColor={"var(--color-green-100)"} text={"CSS"}/>
            <ButtonWithIcon icon={javascript} iconBackgroundColor={"var(--color-blue-50)"} text={"Javascript"}/>
            <ButtonWithIcon icon={accessibillity} iconBackgroundColor={"var(--color-purple-100)"} text={"Accessebility"}/>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Start;

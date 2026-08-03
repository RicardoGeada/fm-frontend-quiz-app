import "./ThemeToggle.css";
// import sunLight from "./../../../assets/images/icon-sun-light.svg";
import sunDark from "./../../../assets/images/icon-sun-dark.svg";
// import moonLight from "./../../../assets/images/icon-moon-light.svg";
import moonDark from "./../../../assets/images/icon-moon-dark.svg";

function ThemeToggle() {
  return (
    <div className="theme-toggle">
      <img
        className="theme-toggle__icon"
        src={sunDark}
        alt="light mode icon"
      />
      <label className="theme-toggle__switch">
        <input type="checkbox" />
        <span className="theme-toggle__slider"></span>
      </label>
      <img
        className="theme-toggle__icon"
        src={moonDark}
        alt="dark mode icon"
      />
    </div>
  );
}

export default ThemeToggle;

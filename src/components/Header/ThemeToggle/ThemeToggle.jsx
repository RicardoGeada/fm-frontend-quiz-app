import "./ThemeToggle.css";
import sunLight from "./../../../assets/images/icon-sun-light.svg";
import sunDark from "./../../../assets/images/icon-sun-dark.svg";
import moonLight from "./../../../assets/images/icon-moon-light.svg";
import moonDark from "./../../../assets/images/icon-moon-dark.svg";
import { useState } from "react";

function ThemeToggle() {
  const [isLightTheme, setIsLightTheme] = useState(() => {
  return document.documentElement.dataset.theme !== "dark";
});

  function handleToggle(event) {
    const theme = event.target.checked ? "dark" : "light";

    document.documentElement.dataset.theme = theme;
    setIsLightTheme(theme === "light");
    localStorage.setItem("theme", theme)
  }

  return (
    <div className="theme-toggle">
      <img
        className="theme-toggle__icon"
        src={isLightTheme ? sunDark : sunLight}
        alt="light mode icon"
      />
      <label className="theme-toggle__switch">
        <input type="checkbox" checked={!isLightTheme} onChange={handleToggle}/>
        <span className="theme-toggle__slider"></span>
      </label>
      <img
        className="theme-toggle__icon"
        src={isLightTheme ? moonDark: moonLight}
        alt="dark mode icon"
      />
    </div>
  );
}

export default ThemeToggle;

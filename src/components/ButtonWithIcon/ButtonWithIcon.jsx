import "./ButtonWithIcon.css";
import icon from "../../assets/images/icon-html.svg";

function ButtonWithIcon() {
  return (
    <button className="button-with-icon text-preset-4">
      <div className="button-with-icon__image" style={{backgroundColor: "var(--color-orange-50)"}}>
        <img src={icon} alt="" />
      </div>

      <span>HTML</span>
    </button>
  );
}

export default ButtonWithIcon;

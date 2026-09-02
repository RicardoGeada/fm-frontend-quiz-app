import "./ButtonWithIcon.css";


function ButtonWithIcon({ icon, iconBackgroundColor, text, ...props }) {
  return (
    <button className="button-with-icon text-preset-4" {...props}>
      <div
        className="button-with-icon__image"
        style={{ backgroundColor: iconBackgroundColor }}
      >
        <img src={icon} alt="" />
      </div>

      <span>{text}</span>
    </button>
  );
}

export default ButtonWithIcon;

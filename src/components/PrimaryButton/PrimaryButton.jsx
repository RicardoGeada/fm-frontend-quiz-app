import "./PrimaryButton.css";

function PrimaryButton({children , ...props}) {
  return (
    <button className="button-primary text-preset-4" {...props}>
      {children}
    </button>
  );
}

export default PrimaryButton;

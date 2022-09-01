import classnames from "classnames";

const Button = ({ children, onClick, submit = false, accent = false }) => {
  const buttonType = submit ? "submit" : "button";
  const buttonClassName = classnames("button", { accent: accent });

  return (
    <>
      <button type={buttonType} className={buttonClassName} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;

import classnames from "classnames";

import Loader from "../icons/Loader";

const Button = ({
  children,
  onClick,
  submit = false,
  reset = false,
  accent = false,
  disabled = false,
  loading = false,
}) => {
  const buttonClassName = classnames("button", {
    accent: accent,
    disabled: disabled,
  });

  let buttonType = "button";
  if (submit && reset) {
    throw new Error("Button cannot be both submit and reset");
  } else if (reset) {
    buttonType = "reset";
  } else if (submit) {
    buttonType = "submit";
  }

  if (loading) {
    return (
      <button type={buttonType} className={buttonClassName} onClick={onClick}>
        <div className="flex items-center space-x-3">
          {children}
          <Loader />
        </div>
      </button>
    );
  }

  return (
    <>
      <button type={buttonType} className={buttonClassName} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;

import classnames from "classnames";

import Loader from "../icons/Loader";

const Button = ({
  children,
  onClick,
  submit = false,
  accent = false,
  disabled = false,
  loading = false,
}) => {
  const buttonType = submit ? "submit" : "button";
  const buttonClassName = classnames("button", {
    accent: accent,
    disabled: disabled,
  });

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

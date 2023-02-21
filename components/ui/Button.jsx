import classnames from "classnames";

import Icon from "../icon";

export const SIZE = Object.freeze({
  compact: Symbol("compact"),
  default: Symbol("default"),
});

export const KIND = Object.freeze({
  primary: Symbol("primary"),
  secondary: Symbol("secondary"),
});

export const TYPE = Object.freeze({
  button: Symbol("button"),
  submit: Symbol("submit"),
  reset: Symbol("reset"),
});

const Button = ({
  children,
  onClick,
  size = SIZE.default,
  type = TYPE.button,
  kind = KIND.primary,
  disabled = false,
  isLoading = false,
}) => {
  const buttonClassName = classnames("button", {
    accent: kind === KIND.secondary,
    disabled: disabled,
    compact: size === SIZE.compact,
  });

  // if (isLoading) {
  //   return (
  //     <button type={type} className={buttonClassName} onClick={onClick}>
  //       <div className="flex items-center space-x-3">{children}</div>
  //     </button>
  //   );
  // }

  return (
    <>
      <button
        type={type.description}
        className={buttonClassName}
        onClick={onClick}
      >
        {children}
        {isLoading && (
          <div className="inline-block ml-2 -mb-1">
            <Icon.Loader />
          </div>
        )}
      </button>
    </>
  );
};

export default Button;

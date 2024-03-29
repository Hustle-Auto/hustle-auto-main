import classnames from "classnames";

import Card from "./Card";

const RadioCardInput = ({ children, value, checked, disabled, onChange }) => {
  const cardClassName = classnames(
    "cursor-pointer relative transition duration-500 h-full",
    {
      "hover:bg-gray-50": !disabled,
    },
    {
      "border-blue-500": checked,
      "ring-2": checked,
      "ring-blue-500": checked,
    },
    {
      "bg-gray-100": disabled,
      "border-gray-200": disabled,
      "cursor-not-allowed": disabled,
    }
  );
  return (
    <label htmlFor={value}>
      <Card className={cardClassName}>
        <input
          id={value}
          type="radio"
          checked={checked}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className="absolute accent-blue-500 top-4 right-4"
        />
        {children}
      </Card>
    </label>
  );
};

export default RadioCardInput;

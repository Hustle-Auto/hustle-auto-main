import classnames from "classnames";

import Card from "./Card";

const RadioCardInput = ({ children, value, checked, onChange }) => {
  const cardClassName = classnames(
    "cursor-pointer relative transition duration-500 hover:bg-gray-50 h-full",
    {
      "border-blue-500": checked,
      "ring-2": checked,
      "ring-blue-500": checked,
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
          className="absolute accent-blue-500 top-4 right-4"
        />
        {children}
      </Card>
    </label>
  );
};

export default RadioCardInput;

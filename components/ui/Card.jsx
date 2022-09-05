import classnames from "classnames";

const Card = ({ children, className }) => {
  return (
    <div
      className={classnames(
        "border border-gray-100 rounded-lg shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;

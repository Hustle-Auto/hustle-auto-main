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

const CardImageTop = ({ children }) => {
  return <div>{children}</div>;
};

const CardBody = ({ children }) => {
  return <div className="p-4 my-5">{children}</div>;
};

const CardTitle = ({ children }) => {
  return <h3 className="mb-3 text-lg font-semibold">{children}</h3>;
};

const CardText = ({ children }) => {
  return <div>{children}</div>;
};

Card.ImageTop = CardImageTop;
Card.Body = CardBody;
Card.Title = CardTitle;
Card.Text = CardText;

export default Card;

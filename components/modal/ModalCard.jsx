const ModalCard = ({ children }) => {
  return (
    <div className="px-8 py-10 border border-gray-100 rounded-lg shadow-lg">
      {children}
    </div>
  );
};

const ModalCardImageTop = ({ children }) => {
  return <div className="flex justify-center h-20">{children}</div>;
};

const ModalCardBody = ({ children }) => {
  return <div className="p-4 mt-3">{children}</div>;
};

const ModalCardTitle = ({ children }) => {
  return <h3 className="mb-5 text-3xl font-bold text-center">{children}</h3>;
};

const ModalCardText = ({ children }) => {
  return <div className="text-gray-500 ">{children}</div>;
};

const ModalCardFooter = ({ children }) => {
  return <div className="mt-5">{children}</div>;
};

ModalCard.ImageTop = ModalCardImageTop;
ModalCard.Body = ModalCardBody;
ModalCard.Title = ModalCardTitle;
ModalCard.Text = ModalCardText;
ModalCard.Footer = ModalCardFooter;

export default ModalCard;

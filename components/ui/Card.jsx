const Card = ({ children }) => {
  return (
    <div className="border border-gray-100 rounded-lg shadow-sm">
      {children}
    </div>
  );
};

export default Card;

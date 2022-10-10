const IconButton = ({ children, onClick }) => {
  return (
    <button
      className="p-2 text-gray-600 transition transform rounded-full hover:scale-110 hover:bg-accent hover:text-white"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;

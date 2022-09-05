const ModalWrapper = ({ children }) => {
  return (
    <div className="w-full h-screen fixed top-0 left-0 z-[999] bg-black/60 flex items-center justify-center">
      <div className="bg-white animate-fade-in">{children}</div>
    </div>
  );
};

export default ModalWrapper;

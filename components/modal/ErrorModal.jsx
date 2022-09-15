import Icon from "../icon";
import Button from "../ui/Button";
import ModalCard from "./ModalCard";
import ModalWrapper from "./ModalWrapper";

const ErrorModal = ({ onConfirm }) => {
  return (
    <ModalWrapper>
      <ModalCard>
        <div className="modal-card-image-top">
          <div className="text-black ">
            <Icon.Error className="h-full" />
          </div>
        </div>
        <div className="modal-card-body">
          <div className="modal-card-title">Something Went Wrong!</div>
          <p className="modal-card-text">
            Please try again. If the issue persists, please contact us at
            hustleaservices@gmail.com.
          </p>
        </div>
        <div className="modal-card-footer">
          <div className="flex justify-center">
            <Button onClick={onConfirm}>Got It!</Button>
          </div>
        </div>
      </ModalCard>
    </ModalWrapper>
  );
};

export default ErrorModal;

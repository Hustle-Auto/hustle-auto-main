import Icon from "../icon";
import Button from "../ui/Button";
import Card from "../ui/Card";
import ModalCard from "./ModalCard";
import ModalWrapper from "./ModalWrapper";

const SuccessModal = (props) => {
  return (
    <ModalWrapper>
      <ModalCard>
        <div className="modal-card-image-top">
          <div className="text-accent">
            <Icon.Check className="h-full" />
          </div>
        </div>

        <div className="modal-card-body">
          <div className="modal-card-title">{props.title}</div>
          <p className="modal-card-text">{props.message}</p>
        </div>
        <div className="modal-card-footer">
          <div className="flex justify-center">
            <Button accent onClick={props.onConfirm}>
              Got It!
            </Button>
          </div>
        </div>
      </ModalCard>
    </ModalWrapper>
  );
};

export default SuccessModal;

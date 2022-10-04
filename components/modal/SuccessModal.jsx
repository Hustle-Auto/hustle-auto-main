import Icon from "../icon";
import Button from "../ui/Button";
import ModalCard from "./ModalCard";
import ModalWrapper from "./ModalWrapper";

const SuccessModal = (props) => {
  return (
    <ModalWrapper>
      <ModalCard>
        <ModalCard.ImageTop>
          <div className="text-accent">
            <Icon.Check className="h-full" />
          </div>
        </ModalCard.ImageTop>
        <ModalCard.Body>
          <ModalCard.Title>{props.title}</ModalCard.Title>
          <ModalCard.Text>
            <div className="text-center">{props.message}</div>
          </ModalCard.Text>
        </ModalCard.Body>
        <ModalCard.Footer>
          <div className="flex justify-center">
            <Button accent onClick={props.onConfirm}>
              Got It!
            </Button>
          </div>
        </ModalCard.Footer>
      </ModalCard>
    </ModalWrapper>
  );
};

export default SuccessModal;

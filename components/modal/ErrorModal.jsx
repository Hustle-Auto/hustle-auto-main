import HUSTLE from "../../data/hustle";
import Icon from "../icon";
import Button, { KIND, TYPE } from "../ui/Button";
import ModalCard from "./ModalCard";
import ModalWrapper from "./ModalWrapper";

const ErrorModal = ({ onConfirm }) => {
  return (
    <ModalWrapper>
      <ModalCard>
        <ModalCard.ImageTop>
          <div className="text-accent ">
            <Icon.Error className="h-full" />
          </div>
        </ModalCard.ImageTop>
        <ModalCard.Body>
          <ModalCard.Title>Something Went Wrong!</ModalCard.Title>
          <ModalCard.Text>
            <div className="text-center">
              Please try again. If the issue persists, please contact us at{" "}
              {HUSTLE.COMPANY.EMAIL}.
            </div>
          </ModalCard.Text>
        </ModalCard.Body>
        <ModalCard.Footer>
          <div className="flex justify-center">
            <Button kind={KIND.secondary} onClick={onConfirm}>
              Got It!
            </Button>
          </div>
        </ModalCard.Footer>
      </ModalCard>
    </ModalWrapper>
  );
};

export default ErrorModal;

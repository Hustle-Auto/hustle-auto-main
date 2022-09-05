import Icon from "../icons/Icon";
import Button from "../ui/Button";
import Card from "../ui/Card";
import ModalCard from "./ModalCard";
import ModalWrapper from "./ModalWrapper";

const ServiceRequestSubmittedModal = ({ onConfirm }) => {
  return (
    <ModalWrapper>
      <ModalCard>
        <div className="modal-card-image-top">
          <div className="text-accent">
            <Icon.Check className="h-full" />
          </div>
        </div>

        <div className="modal-card-body">
          <div className="modal-card-title">We Have Received Your Request!</div>
          <p className="modal-card-text">
            We will contact you shortly to confirm your booking.
          </p>
        </div>
        <div className="modal-card-footer">
          <div className="flex justify-center">
            <Button accent onClick={onConfirm}>
              Got It!
            </Button>
          </div>
        </div>
      </ModalCard>
    </ModalWrapper>
  );
};

export default ServiceRequestSubmittedModal;

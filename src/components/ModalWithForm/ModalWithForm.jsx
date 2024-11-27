import Modal from "../Modal/Modal";

import "./ModalWithForm.css";

function ModalWithForm({
  name,
  onClose,
  activeModal,
  title,
  buttonText,
  onSubmit,
  children,
  onOpen /* added */,
}) {
  // Only render the ModalWithForm if activeModal matches the name of the modal
  if (activeModal !== name) return null; /* added */

  return (
    <Modal
      name={name}
      type="form"
      onClose={onClose}
      activeModal={activeModal}
      onOpen={onOpen}
    >
      <h2 className="modal-form__title">{title}</h2>
      <form name={name} className="modal-form__form" onSubmit={onSubmit}>
        {children}
        <button type="submit" className="modal-form__submit-button">
          {buttonText}
        </button>
      </form>
    </Modal>
  );
}

export default ModalWithForm;

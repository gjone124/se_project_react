import Modal from "../Modal/Modal.jsx";

import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

import "./ItemModal.css";

function ItemModal({ name, onClose, activeModal, item, openDeleteModal }) {
  const { currentUser } = useContext(CurrentUserContext);

  // when there is a user logged in & the selected card's owner is the same value as the
  // current user's ID, the card is owned by the current user & returns true
  const isOwnedByCurrentUser = currentUser && item.owner === currentUser._id;

  return (
    <Modal name={name} type="item" onClose={onClose} activeModal={activeModal}>
      <img src={item.imageUrl} alt="Item" className="item-modal__image" />
      <div className="item-modal__info">
        <span className="item-modal__span">
          <h2 className="item-modal__title">{item.name}</h2>
          {/* only display delete button if user is logged in & item is owned by current user */}
          {isOwnedByCurrentUser && (
            <button
              className="item-modal__delete-button"
              onClick={openDeleteModal}
            >
              Delete item
            </button>
          )}
        </span>
        <p className="item-modal__caption">{`Weather: ${item.weather}`}</p>
      </div>
    </Modal>
  );
}

export default ItemModal;

/* file added for Sprint 14 */

//("change profile data")

import { useState, useEffect, useContext } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import "../ModalWithForm/ModalWithForm.css";

const EditProfileModal = ({
  name,
  onClose,
  onEditProfileSubmit,
  activeModal,
  onOpen,
}) => {
  const currentUser = useContext(CurrentUserContext);

  const [userData, setUserData] = useState({
    name: "",
    avatar: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((previousUserData) => ({
      ...previousUserData,
      [name]: value,
    }));
  };

  // method handles when user clicks on "Save changes" submit button within "Change profile data" form
  const handleEditProfileModalSubmit = (event) => {
    event.preventDefault();
    onEditProfileSubmit({ name: userData.name, avatar: userData.avatar });
    onClose();
    //console.log("edit profile modal submitted");
  };

  useEffect(() => {
    if (currentUser) {
      setUserData({
        name: currentUser.name || "",
        avatar: currentUser.avatar || "",
      });
    }
  }, [currentUser]);

  return (
    <ModalWithForm
      name={name}
      onClose={onClose}
      activeModal={activeModal}
      title="Change profile data"
      buttonText="Save changes"
      onOpen={onOpen}
      onSubmit={handleEditProfileModalSubmit}
    >
      <label htmlFor="name" className="modal-form__label">
        Name *
        <input
          type="text"
          name="name"
          className="modal-form__input"
          id="name"
          placeholder="User Name"
          value={currentUser.name}
          onChange={handleChange}
          required
        />
      </label>

      <label htmlFor="avatar" className="modal-form__label">
        Avatar *
        <input
          type="url"
          name="avatar"
          className="modal-form__input"
          id="avatar"
          placeholder="Avatar"
          value={currentUser.avatar}
          onChange={handleChange}
          required
        />
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;

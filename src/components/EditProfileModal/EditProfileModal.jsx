/* file added for Sprint 14 */

//("change profile data")

import { useState, useEffect, useContext } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import "./EditProfileModal.css";

const EditProfileModal = ({
  name,
  onClose,
  onEditProfileSubmit,
  activeModal,
  onOpen,
}) => {
  const { currentUser } = useContext(CurrentUserContext);

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

  // this method is to insert current user's data for the Edit Profile Modal automatically when you open the form
  useEffect(() => {
    // this only runs when the active modal is the edit profile modal
    // (if you didn't have this if statement, it would run everytime the activeModal is called which we don't want)
    if (activeModal === "edit-profile-form") {
      setUserData({ name: currentUser?.name, avatar: currentUser?.avatar });
    }
  }, [activeModal]);

  // method handles when user clicks on "Save changes" submit button within "Change profile data" form
  const handleEditProfileModalSubmit = (event) => {
    event.preventDefault();
    onEditProfileSubmit({ name: userData.name, avatar: userData.avatar });
    // .then(() => onClose())
    // .catch((error) => {
    //   console.error("Error changing data:", error);
    // });
  };

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
          placeholder="Username"
          value={userData.name}
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
          value={userData.avatar}
          onChange={handleChange}
          required
        />
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;

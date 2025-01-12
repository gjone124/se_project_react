/* file added for Sprint 14 (SignUpModal) */

import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import "./RegisterModal.css";

const RegisterModal = ({ name, onClose, onRegister, activeModal, onOpen }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    username: "",
    avatarUrl: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((previousUserData) => ({
      ...previousUserData,
      [name]: value,
    }));
  };

  // const [email, setEmail] = useState("");
  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };

  // const [password, setPassword] = useState("");
  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  // const [username, setUsername] = useState("");
  // const handleUsernameChange = (event) => {
  //   setUsername(event.target.value);
  // };

  // const [avatarUrl, setAvatarUrl] = useState("");
  // const handleAvatarUrlChange = (event) => {
  //   setAvatarUrl(event.target.value);
  // };

  // method handles when user clicks on "Sign Up" submit button within "Sign Up" form
  const handleRegisterModalSubmit = (event) => {
    event.preventDefault();
    onRegister(userData);
    onClose();
  };

  return (
    <ModalWithForm
      name={name}
      onClose={onClose}
      activeModal={activeModal}
      title="Sign Up"
      buttonText="Sign Up"
      onOpen={onOpen}
      onSubmit={handleRegisterModalSubmit}
    >
      <label htmlFor="email" className="modal-form__label">
        Email*
        <input
          type="email"
          name="email"
          className="modal-form__input"
          id="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label htmlFor="password" className="modal-form__label">
        Password*
        <input
          type="password"
          name="password"
          className="modal-form__input"
          id="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleChange}
          required
        />
      </label>

      <label htmlFor="username" className="modal-form__label">
        Name*
        <input
          type="text"
          name="username"
          className="modal-form__input"
          id="username"
          placeholder="Name"
          value={userData.username}
          onChange={handleChange}
          required
        />
      </label>

      <label htmlFor="avatarUrl" className="modal-form__label">
        Avatar URL
        <input
          type="url"
          name="avatarUrl"
          className="modal-form__input"
          id="avatarUrl"
          placeholder="Avatar URL"
          value={userData.avatarUrl}
          onChange={handleChange}
          //required // (comment out if no avatar provided)
        />
      </label>

      <button
        type="button"
        className="register-modal__or-login-button"
        onClick={() => onOpen("login-form")}
      >
        or Log In
      </button>
    </ModalWithForm>
  );
};

export default RegisterModal;

/* file added for Sprint 14 (SignUpModal) */

import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import "./RegisterModal.css";

const RegisterModal = ({ name, onClose, onRegister, activeModal, onOpen }) => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const [username, setUsername] = useState("");
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const [avatarUrl, setAvatarUrl] = useState("");
  const handleAvatarUrlChange = (event) => {
    setAvatarUrl(event.target.value);
  };

  // method handles when user clicks on "Sign Up" submit butjton within "Sign Up" form
  const onSubmit = (event) => {
    event.preventDefault();
    onRegister({ email, password, username, avatarUrl });
    console.log("registration submitted from RegisterModal.jsx");
  };

  return (
    <ModalWithForm
      name={name}
      onClose={onClose}
      activeModal={activeModal}
      title="Sign Up"
      buttonText="Sign Up"
      onOpen={onOpen}
      onSubmit={onSubmit}
    >
      <label htmlFor="email" className="modal-form__label">
        Email*
        <input
          type="email"
          className="modal-form__input"
          id="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </label>

      <label htmlFor="password" className="modal-form__label">
        Password*
        <input
          type="password"
          className="modal-form__input"
          id="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </label>

      <label htmlFor="username" className="modal-form__label">
        Name*
        <input
          type="text"
          className="modal-form__input"
          id="username"
          placeholder="Name"
          value={username}
          onChange={handleUsernameChange}
          required
        />
      </label>

      <label htmlFor="avatarUrl" className="modal-form__label">
        Avatar URL*
        <input
          type="url"
          className="modal-form__input"
          id="avatarUrl"
          placeholder="Avatar URL"
          value={avatarUrl}
          onChange={handleAvatarUrlChange}
          required
        />
      </label>

      <button
        type="button"
        className={`header__clothes-button`}
        onClick={() => console.log("Login button clicked")}
      >
        or Log In
      </button>
    </ModalWithForm>
  );
};

export default RegisterModal;

/* file added for Sprint 14 */

import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import "./LoginModal.css";

const LoginModal = ({ name, onClose, onLogin, activeModal, onOpen }) => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // method handles when user clicks on "Log In" submit button within "Log In" form
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
  };

  return (
    <ModalWithForm
      name={name}
      onClose={onClose}
      activeModal={activeModal}
      title="Log In"
      buttonText="Log In"
      onOpen={onOpen}
      onSubmit={handleLoginSubmit}
    >
      <label htmlFor="email" className="modal-form__label">
        Email
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
        Password
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
    </ModalWithForm>
  );
};

export default LoginModal;

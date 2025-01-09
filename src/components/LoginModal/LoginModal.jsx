/* file added for Sprint 14 */

import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import "./LoginModal.css";

const LoginModal = ({ name, onClose, onLogin, activeModal, onOpen }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
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

  // method handles when user clicks on "Log In" submit button within "Log In" form
  const handleLoginModalSubmit = (event) => {
    event.preventDefault();
    onLogin(userData);
    onClose();
    console.log("login submitted");
  };

  return (
    <ModalWithForm
      name={name}
      onClose={onClose}
      activeModal={activeModal}
      title="Log In"
      buttonText="Log In"
      onOpen={onOpen}
      onSubmit={handleLoginModalSubmit}
    >
      <label htmlFor="email" className="modal-form__label">
        Email
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
        Password
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

      <button
        type="button"
        className="login-modal__or-sign-up-button"
        onClick={() => onOpen("registration-form")}
      >
        or Sign Up
      </button>
    </ModalWithForm>
  );
};

export default LoginModal;

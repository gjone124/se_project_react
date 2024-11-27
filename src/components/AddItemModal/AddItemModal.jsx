import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import "./AddItemModal.css";

/* whole file added */

const AddItemModal = ({ onClose, onAddItem, activeModal, onOpen }) => {
  const [name, setName] = useState("");
  const handleNameChange = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const [link, setUrl] = useState("");
  const handleUrlChange = (event) => {
    console.log(event.target.value);
    setUrl(event.target.value);
  };

  const [weatherType, setWeatherType] = useState(""); // New state for weather type
  const handleWeatherChange = (event) => {
    console.log(event.target.value);
    setWeatherType(event.target.value); // Update weather type when radio button changes
  };

  // add item to items array & reset form values
  const handleAddItemSubmit = (event) => {
    event.preventDefault();
    onAddItem({ name, imageUrl: link, weather: weatherType })
      .then(() => {
        setName("");
        setUrl("");
        setWeatherType("");
      })
      .catch(console.error);
  };

  return (
    <ModalWithForm
      name="add-garment-form"
      onClose={onClose}
      activeModal={activeModal}
      title="New garment"
      buttonText="Add garment"
      onOpen={onOpen}
      onSubmit={handleAddItemSubmit}
    >
      <label htmlFor="name" className="modal-form__label">
        Name
        <input
          type="text"
          className="modal-form__input"
          id="name"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </label>
      <label htmlFor="imageUrl" className="modal-form__label">
        Image
        <input
          type="url"
          className="modal-form__input"
          id="imageUrl"
          placeholder="Image URL"
          value={link}
          onChange={handleUrlChange}
          required
        />
      </label>
      <fieldset className="modal-form__radio-buttons-container">
        <legend className="modal-form__legend">Select the weather type:</legend>
        <label
          htmlFor="hot"
          className="modal-form__label modal-form__label_type_radio_button"
        >
          <input
            type="radio"
            className="modal-form__radio-button"
            id="hot"
            name="weather"
            value="hot"
            checked={weatherType === "hot"}
            onChange={handleWeatherChange}
            required
          />
          Hot
        </label>
        <label
          htmlFor="warm"
          className="modal-form__label modal-form__label_type_radio_button"
        >
          <input
            type="radio"
            className="modal-form__radio-button"
            id="warm"
            name="weather"
            value="warm"
            checked={weatherType === "warm"}
            onChange={handleWeatherChange}
            required
          />
          Warm
        </label>
        <label
          htmlFor="cold"
          className="modal-form__label modal-form__label_type_radio_button"
        >
          <input
            type="radio"
            className="modal-form__radio-button"
            id="cold"
            name="weather"
            value="cold"
            checked={weatherType === "cold"}
            onChange={handleWeatherChange}
            required
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;

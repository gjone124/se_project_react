import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import "./AddItemModal.css";

const AddItemModal = ({ onClose, onAddItem, activeModal, onOpen }) => {
  const [itemData, setItemData] = useState({
    name: "",
    link: "",
    weatherType: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setItemData((previousItemData) => ({
      ...previousItemData,
      [name]: value,
    }));
  };

  // const [name, setName] = useState("");
  // const handleNameChange = (event) => {
  //   setName(event.target.value);
  // };

  // const [link, setUrl] = useState("");
  // const handleUrlChange = (event) => {
  //   setUrl(event.target.value);
  // };

  // const [weatherType, setWeatherType] = useState(""); // New state for weather type
  // const handleWeatherChange = (event) => {
  //   setWeatherType(event.target.value); // Update weather type when radio button changes
  // };

  // add item to items array & reset form values
  const handleAddItemSubmit = (event) => {
    event.preventDefault();
    onAddItem({
      name: itemData.name,
      imageUrl: itemData.link,
      weather: itemData.weatherType,
    })
      .then(() => {
        setItemData({
          name: "",
          link: "",
          weatherType: "",
        });
        // setName("");
        // setUrl("");
        // setWeatherType("");
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
          name="name"
          className="modal-form__input"
          id="name"
          placeholder="Name"
          value={itemData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="imageUrl" className="modal-form__label">
        Image
        <input
          type="url"
          name="link"
          className="modal-form__input"
          id="imageUrl"
          placeholder="Image URL"
          value={itemData.link}
          onChange={handleChange}
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
            name="weatherType"
            value="hot"
            checked={itemData.weatherType === "hot"}
            onChange={handleChange}
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
            name="weatherType"
            value="warm"
            checked={itemData.weatherType === "warm"}
            onChange={handleChange}
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
            name="weatherType"
            value="cold"
            checked={itemData.weatherType === "cold"}
            onChange={handleChange}
            required
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;

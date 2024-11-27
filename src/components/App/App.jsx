import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import DeleteModal from "../DeleteModal/DeleteModal.jsx";
import Footer from "../Footer/Footer.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import Profile from "../Profile/Profile.jsx";

import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";

import { getWeatherData, filterWeatherData } from "../../utils/weatherApi.js";
import { getItems, postItem, deleteItem } from "../../utils/api.js";

import {
  coordinates,
  APIkey,
  defaultClothingItems,
} from "../../utils/constants.js";

import "./App.css";

// App component includes Header, Main, Profile, Footer,
// AddItemModal, & ItemModal components
function App() {
  const [weatherData, setWeatherData] = useState({
    city: "Unknown",
    type: "hot",
    timeOfDay: "day",
    condition: "default",
    temp: { F: 999, C: 999 },
  });
  const [activeModal, setActiveModal] = useState(null);
  const [selectedCard, setSelectedCard] = useState({});
  // const [temperature, setTemperature] = useState(null); /* added */
  const [clothingItems, setClothingItems] = useState([]);
  const [isMobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  function onOpen(name) {
    setActiveModal(name);
  }

  function openDeleteModal() {
    onOpen("delete");
  }

  function onClose() {
    setActiveModal("");
  }

  function onAddClothes() {
    onOpen("add-garment-form");
  }

  function onCardClick(item) {
    setActiveModal("preview");
    setSelectedCard(item);
  }

  function toggleMobileMenu() {
    setMobileMenuOpened(!isMobileMenuOpened);
  }

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  // const onSubmit = (event) => {
  //   event.preventDefault();
  // };

  function handleSubmit(request) {
    return request()
      .then(onClose)
      .catch((error) => {});
  }

  function onAddItem(item) {
    //fetch to your mock server to add a new item to the server
    //add the item to the dom (visually)
    //onClose(activeModal);
    //console.log(values);
    // console.log(event.target);

    const addItemRequest = () => {
      return postItem(item).then((data) => {
        setClothingItems([data, ...clothingItems]);
      });
    };

    return handleSubmit(addItemRequest);
  }

  // function onDeleteItem(item) {
  //   onClose(activeModal);
  // }

  function onDeleteItem(item) {
    const deleteRequest = () => {
      return deleteItem(selectedCard._id).then(() => {
        setClothingItems(
          clothingItems.filter((clothingItem) => {
            return clothingItem !== selectedCard;
          })
        );
      });
    };

    handleSubmit(deleteRequest);
  }

  // get weather
  useEffect(() => {
    getWeatherData(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  // get items
  /* added */
  useEffect(() => {
    getItems()
      .then((data) => {
        console.log(data);
        setClothingItems(data.reverse());
      })
      .catch(console.error);
  }, []);

  // console.log(currentTemperatureUnit);

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header
          onAddClothes={onAddClothes}
          weatherData={weatherData}
          isMenuOpen={isMobileMenuOpened}
          onMenuOpen={toggleMobileMenu}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                weatherData={weatherData}
                onCardClick={onCardClick}
                items={clothingItems}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                onCardClick={onCardClick}
                items={clothingItems}
                onAddClothes={onAddClothes}
              />
            }
          />
        </Routes>
      </CurrentTemperatureUnitContext.Provider>

      <Footer />
      {/* added */}
      <AddItemModal
        name="add-garment-form"
        onClose={onClose}
        onOpen={onOpen}
        onAddItem={onAddItem}
        activeModal={activeModal}
      />
      {/* added */}
      <ItemModal
        name="preview"
        onClose={onClose}
        activeModal={activeModal}
        item={selectedCard}
        openDeleteModal={openDeleteModal}
      />
      <DeleteModal
        name="delete"
        activeModal={activeModal}
        onAddItem={onAddItem}
        onClose={onClose}
        onDelete={onDeleteItem}
      />
    </div>
  );
}

export default App;

// React elements
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Header from "../Header/Header.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import Main from "../Main/Main.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import DeleteModal from "../DeleteModal/DeleteModal.jsx";
import Profile from "../Profile/Profile.jsx";
import Footer from "../Footer/Footer.jsx";

// Utlities
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";
import { getWeatherData, filterWeatherData } from "../../utils/weatherApi.js";
import { getItems, postItem, deleteItem } from "../../utils/api.js";
import { coordinates, APIkey } from "../../utils/constants.js";
import { registerUser } from "../../utils/auth.js";

// Styling for App.jsx
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
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
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

  function handleSubmit(request) {
    return request().then(onClose).catch(console.error);
  }

  // fetch to mock server, add item to mock server, & then add item to the DOM (Document Object Modifier)
  function onAddItem(item) {
    const addItemRequest = () => {
      return postItem(item).then((data) => {
        setClothingItems([data, ...clothingItems]);
      });
    };

    return handleSubmit(addItemRequest);
  }

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

  function handleRegisterClick() {
    console.log("clicked on sign up");
    setActiveModal("registration-form");
  }

  function handleLoginClick() {
    console.log("clicked on log in");
    setActiveModal("login-form");
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
  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data.reverse());
      })
      .catch(console.error);
  }, []);

  const handleRegisterModalSubmit = ({
    email,
    password,
    username,
    avatarUrl,
  }) => {
    console.log("registration submitted from App.jsx");
    return registerUser({ email, password, username, avatarUrl }).then(() => {
      onClose();
    });
    // user press button -> request to the API -> save in DB -> return response; API request should be here
    // call postRegister and do some next stuff in the .then function
  };

  const handleLoginModalSubmit = () => {};

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
          onRegister={handleRegisterClick}
          onLogin={handleLoginClick}
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
      <AddItemModal
        name="add-garment-form"
        onClose={onClose}
        onOpen={onOpen}
        onAddItem={onAddItem}
        activeModal={activeModal}
      />
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
      <RegisterModal
        name="registration-form"
        onClose={onClose}
        onOpen={onOpen}
        onRegister={handleRegisterModalSubmit}
        activeModal={activeModal}
      />
      <LoginModal
        name="login-form"
        onClose={onClose}
        onOpen={onOpen}
        // onLogin={onLogin}
        activeModal={activeModal}
      />
    </div>
  );
}

export default App;

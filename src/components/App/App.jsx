// React elements
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

// Components
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Profile from "../Profile/Profile.jsx";
import Footer from "../Footer/Footer.jsx";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";

// Modals (part of Components)
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import DeleteModal from "../DeleteModal/DeleteModal.jsx";

//("change profile data")
import EditProfileModal from "../EditProfileModal/EditProfileModal.jsx";

// Contexts
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

// Utilities
import { getWeatherData, filterWeatherData } from "../../utils/weatherApi.js";
import {
  getItems,
  postItem,
  deleteItem,
  getCurrentUser,
  editUserProfile,
  addCardLike,
  removeCardLike,
} from "../../utils/api.js";
import { coordinates, apiKey } from "../../utils/constants.js";
import { registerUser, loginUser } from "../../utils/auth.js";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Sprint 14
  const [currentUser, setCurrentUser] = useState(null); // Sprint 14

  const navigate = useNavigate(); // Sprint 14

  /* Initial Data Loading */

  // get current user
  // this method keeps current user logged in when you refresh page (Sprint 14)
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      // fetch current user using stored token
      getCurrentUser(token)
        .then((user) => {
          setIsLoggedIn(true); // mark user as logged in
          setCurrentUser(user); // update user state
        })
        .catch((err) => {
          console.error("Error fetching user:", err);
          localStorage.removeItem("jwt"); // remove invalid token if necessary
          setIsLoggedIn(false); // ensure state reflects logged out status
          setCurrentUser(null);
        });
    }
  }, []); // empty dependency array ensures this only runs on page load

  // get weather
  useEffect(() => {
    getWeatherData(coordinates, apiKey)
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

  /* Modal Handlers */
  function onOpen(name) {
    setActiveModal(name);
  }

  function onClose() {
    setActiveModal("");
  }

  function openDeleteModal() {
    onOpen("delete");
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

  // added for Sprint 14
  function handleRegisterClick() {
    setActiveModal("registration-form");
  }

  // added for Sprint 14
  function handleLoginClick() {
    setActiveModal("login-form");
  }

  /* Temperature Unit Handler */
  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  /* Like Handler */
  // Sprint 14 ("like functionality")
  function handleCardLike({ id, isLiked }) {
    const token = localStorage.getItem("jwt");
    const updateCardLikeStatus = isLiked ? removeCardLike : addCardLike;

    updateCardLikeStatus(id, token)
      .then((updatedCard) => {
        setClothingItems((cards) =>
          cards.map((item) => (item._id === id ? updatedCard : item))
        );
      })
      .catch(console.error);
  }

  /* Submit Handlers */
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

  /* Authentication Handlers */
  // when there is a successful registration, the user should be logged in (Sprint 14)
  const handleRegistration = ({ email, password, username, avatarUrl }) => {
    // user presses "Sign Up" button, request to API is sent, if successful registerUser is called to save it in database,
    // response returned, handleLogin called to log in user
    return registerUser({ email, password, username, avatarUrl }).then(
      (response) => {
        handleLogin({ email, password });
      }
    );
  };

  // after you register user, you can check Mongo DB to see if user has been added
  // & you can use Postman to get your current users & ensure user was added
  // but would need to readd "getUsers" method implemented for Sprint 12
  // but we were told to remove for Sprint 13

  // log in the user (Sprint 14)
  const handleLogin = ({ email, password }) => {
    // call loginUser function from auth.js, then set localStorage token to response token,
    // then change state of isLoggedIn to true,
    // then check token of current user to make sure they are authorized,
    // then set the current user to the current user
    return loginUser({ email, password })
      .then((data) => {
        //"jwt" is the key that data.token is stored in
        localStorage.setItem("jwt", data.token);
        setIsLoggedIn(true);
        return getCurrentUser(data.token);
      })
      .then((user) => {
        setCurrentUser(user);
      });
  };

  //("change profile data")
  // edit user data (username or avatar) (Sprint 14)
  const handleEditProfile = (profileData) => {
    const token = localStorage.getItem("jwt");
    editUserProfile(profileData, token).then((updatedUser) => {
      setCurrentUser(updatedUser);
    });
  };

  // log out functionality added for Sprint 14
  const handleLogOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser(null);
    navigate("/");
  };

  return (
    //CurrentUserContext added for Sprint 14
    <CurrentUserContext.Provider value={{ currentUser, isLoggedIn }}>
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
            isLoggedIn={isLoggedIn}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  onCardClick={onCardClick}
                  items={clothingItems}
                  // Sprint 14 ("like functionality")
                  handleCardLike={handleCardLike}
                />
              }
            />
            <Route
              path="/profile"
              element={
                // protect profile route by creating wrapper component to redirect
                // unauthorized users to main page
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Profile
                    onCardClick={onCardClick}
                    items={clothingItems}
                    onAddClothes={onAddClothes}
                    handleLogOut={handleLogOut}
                    // ("change profile data") => setActiveModal passed as prop from App.jsx
                    // to allow setActiveModal to be called within handleEditProfileClick
                    // in Profile.jsx
                    setActiveModal={setActiveModal}
                    // Sprint 14 ("like functionality")
                    handleCardLike={handleCardLike}
                  />
                </ProtectedRoute>
              }
            />
          </Routes>
        </CurrentTemperatureUnitContext.Provider>

        <Footer />

        {/* Modals */}
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

        {/* modal added for Sprint 14 */}
        <RegisterModal
          name="registration-form"
          onClose={onClose}
          onOpen={onOpen}
          onRegister={handleRegistration}
          activeModal={activeModal}
        />

        {/* modal added for Sprint 14 */}
        <LoginModal
          name="login-form"
          onClose={onClose}
          onOpen={onOpen}
          onLogin={handleLogin}
          activeModal={activeModal}
        />

        {/* ("change profile data") */}
        {/* modal added for Sprint 14 */}
        <EditProfileModal
          name="edit-profile-form"
          onClose={onClose}
          onOpen={onOpen}
          onEditProfileSubmit={handleEditProfile}
          activeModal={activeModal}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

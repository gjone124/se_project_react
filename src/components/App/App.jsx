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
  editUserProfile,
  addCardLike,
  removeCardLike,
} from "../../utils/api.js";
import { COORDINATES, API_KEY } from "../../utils/constants.js";
import {
  registerUser,
  loginUser,
  verifyUserByCheckingToken,
} from "../../utils/auth.js";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const navigate = useNavigate();

  /* Initial Data Loading */

  // get current user
  // autologin functionality (this method keeps current user logged in when you refresh page)
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      // fetch current user using stored token
      verifyUserByCheckingToken(token)
        .then((user) => {
          setIsLoggedIn(true); // mark user as logged in
          setCurrentUser(user); // update user state
        })
        .catch((error) => {
          console.error("Error fetching user:", error);
          localStorage.removeItem("jwt"); // remove invalid token if necessary
          setIsLoggedIn(false); // ensure state reflects logged out status
          setCurrentUser(null);
        });
    }
  }, []); // empty dependency array ensures this only runs on page load

  // get weather
  useEffect(() => {
    getWeatherData(COORDINATES, API_KEY)
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

  function handleRegisterClick() {
    setActiveModal("registration-form");
  }

  function handleLoginClick() {
    setActiveModal("login-form");
  }

  /* Temperature Unit Handler */
  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  /* Like Handler */
  function handleCardLike({ id, isLiked }) {
    const token = localStorage.getItem("jwt");
    const updateCardLikeStatus = isLiked ? removeCardLike : addCardLike;

    updateCardLikeStatus(id, token)
      .then((updatedCard) => {
        setClothingItems((cards) =>
          cards.map((item) => (item._id === id ? updatedCard : item))
        );
      })
      .catch((error) => console.error(error));
  }

  /* Submit Handlers */
  function handleSubmit(request) {
    return request()
      .then(() => onClose())
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  // fetch to server, add item to server, & then add item to the DOM (Document Object Modifier)
  function onAddItem(item) {
    const addItemRequest = () => {
      return postItem(item).then((data) => {
        setClothingItems([data, ...clothingItems]);
      });
    };
    return handleSubmit(addItemRequest);
  }

  function onDeleteItem() {
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
  // when there is a successful registration, the user should be logged in
  const handleRegistration = ({ email, password, username, avatarUrl }) => {
    // user presses "Sign Up" button, request to API is sent,
    // if successful registerUser is called to save it in database,
    // response returned, handleLogin called to log in user
    return registerUser({ email, password, username, avatarUrl })
      .then(() => {
        // register modal should only close after successful registration
        // (close method called within handleLogin method)
        handleLogin({ email, password });
      })
      .catch((error) => console.error("Registration error:", error));
  };

  // after you register user, you can check Mongo DB to see if user has been added
  // Mongo DB will also show all current users
  // & you can delete users & items remotely from Mongo DB

  // log in the user
  const handleLogin = ({ email, password }) => {
    // call loginUser function from auth.js, then set localStorage token to response token,
    // then change state of isLoggedIn to true,
    // then check token of current user to make sure they are authorized,
    // then set the current user to the current user
    return loginUser({ email, password })
      .then((data) => {
        if (!data.token) throw new Error("Token not received.");
        //"jwt" is the key that data.token is stored in
        localStorage.setItem("jwt", data.token);
        setIsLoggedIn(true);
        return verifyUserByCheckingToken(data.token);
      })
      .then((user) => {
        setCurrentUser(user);
        // login modal should only close after successful login
        onClose();
      })
      .catch((error) => console.error("Login error:", error));
  };

  // edit user data (username or avatar)
  const handleEditProfile = (profileData) => {
    const token = localStorage.getItem("jwt");
    editUserProfile(profileData, token)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
        // edit profile modal should only close after successful submission
        onClose();
      })
      .catch((error) => console.error("Error changing data:", error));
  };

  // log out functionality
  const handleLogOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser(null);
    navigate("/");
  };

  return (
    //CurrentUserContext allows data to be shared w/ other files
    // w/o having to pass props manually through each level
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
                    // setActiveModal passed as prop from App.jsx to allow
                    // setActiveModal to be called within
                    // handleEditProfileClick in Profile.jsx
                    setActiveModal={setActiveModal}
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

        <RegisterModal
          name="registration-form"
          onClose={onClose}
          onOpen={onOpen}
          onRegister={handleRegistration}
          activeModal={activeModal}
        />

        <LoginModal
          name="login-form"
          onClose={onClose}
          onOpen={onOpen}
          onLogin={handleLogin}
          activeModal={activeModal}
        />

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

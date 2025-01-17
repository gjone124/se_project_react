import ClothesSection from "../ClothesSection/ClothesSection.jsx";
import SideBar from "../SideBar/SideBar.jsx";

import "./Profile.css";

// setActiveModal passed as prop from App.jsx
// to allow setActiveModal to be called within
// handleEditProfileClick in Profile.jsx

// Profile component includes SideBar & ClothesSection components
function Profile({
  onCardClick,
  items,
  onAddClothes,
  handleLogOut,
  setActiveModal,
  handleCardLike,
}) {
  function handleEditProfileClick() {
    setActiveModal("edit-profile-form");
  }

  return (
    <div className="profile">
      <section className="profile__side-bar">
        <SideBar
          handleUpdateClick={handleEditProfileClick}
          handleLogOut={handleLogOut}
        />
      </section>
      <section className="profile__clothes-section">
        <ClothesSection
          onCardClick={onCardClick}
          items={items}
          onAddClothes={onAddClothes}
          handleCardLike={handleCardLike}
        />
      </section>
    </div>
  );
}

export default Profile;

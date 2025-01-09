import ClothesSection from "../ClothesSection/ClothesSection.jsx";
import SideBar from "../SideBar/SideBar.jsx";

import "./Profile.css";

// ("change profile data") => setActiveModal passed as prop from App.jsx
// to allow setActiveModal to be called within handleEditProfileClick
// in Profile.jsx

// Profile component includes SideBar & ClothesSection components
function Profile({
  onCardClick,
  items,
  onAddClothes,
  handleLogOut,
  setActiveModal,
}) {
  // handleEditProfileClick added for Sprint 14 ("change profile data")
  function handleEditProfileClick() {
    console.log("clicked on edit profile");
    setActiveModal("edit-profile-form");
  }

  return (
    <div className="profile">
      <section className="profile__side-bar">
        <SideBar
          //("change profile data")
          handleUpdateClick={handleEditProfileClick}
          handleLogOut={handleLogOut}
        />
      </section>
      <section className="profile__clothes-section">
        <ClothesSection
          onCardClick={onCardClick}
          items={items}
          onAddClothes={onAddClothes}
        />
      </section>
    </div>
  );
}

export default Profile;

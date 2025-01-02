import ClothesSection from "../ClothesSection/ClothesSection.jsx";
import SideBar from "../SideBar/SideBar.jsx";

import "./Profile.css";

// Profile component includes SideBar & ClothesSection components
function Profile({ onCardClick, items, onAddClothes }) {
  return (
    <div className="profile">
      <section className="profile__side-bar">
        <SideBar />
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

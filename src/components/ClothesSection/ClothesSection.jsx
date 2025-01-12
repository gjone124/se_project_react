import ItemCard from "../ItemCard/ItemCard.jsx";
import "./ClothesSection.css";

import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function ClothesSection({ onCardClick, items, onAddClothes, handleCardLike }) {
  const { currentUser } = useContext(CurrentUserContext); // Sprint 14
  const userItems = items.filter((item) => item.owner === currentUser._id); // Sprint 14

  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <p className="clothes-section__title">Your items</p>
        <button className={"clothes-section__button"} onClick={onAddClothes}>
          + Add new
        </button>
      </div>
      {/* modified for Sprint 14 w/ no clothings items condition */}
      <ul className="clothes-section__items">
        {userItems.length > 0 ? (
          userItems.map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={onCardClick}
              // Sprint 14 ("like functionality")
              handleCardLike={handleCardLike}
            />
          ))
        ) : (
          <p>No clothing items found.</p>
        )}
      </ul>
    </div>
  );
}

export default ClothesSection;

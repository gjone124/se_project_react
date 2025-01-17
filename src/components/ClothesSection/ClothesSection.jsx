import ItemCard from "../ItemCard/ItemCard.jsx";
import "./ClothesSection.css";

import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function ClothesSection({ onCardClick, items, onAddClothes, handleCardLike }) {
  const { currentUser } = useContext(CurrentUserContext);
  const userItems = items.filter((item) => item.owner === currentUser._id);

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

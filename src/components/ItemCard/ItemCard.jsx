import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

import "./ItemCard.css";

function ItemCard({ onCardClick, item, handleCardLike }) {
  const { currentUser } = useContext(CurrentUserContext);
  const isLiked = item.likes?.some((id) => id === currentUser?._id);
  const itemCardLikeClassName = `item-card__heart ${
    isLiked ? "item-card__heart_liked" : ""
  }`;

  function handleCardClick() {
    onCardClick(item);
  }

  function handleLike() {
    handleCardLike({ id: item._id, isLiked });
  }

  return (
    <li className="item-card">
      <div className="item-card__header">
        {" "}
        <p className="item-card__label">{item.name}</p>
        {/* this ensures like button is only shown if user is logged in */}
        {currentUser?._id && (
          <button
            type="button"
            className={itemCardLikeClassName}
            onClick={handleLike}
          />
        )}
      </div>
      <img
        src={item.imageUrl}
        alt={item.name}
        className="item-card__icon"
        onClick={handleCardClick}
      />
    </li>
  );
}

export default ItemCard;

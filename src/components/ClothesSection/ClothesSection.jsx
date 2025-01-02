import ItemCard from "../ItemCard/ItemCard.jsx";
import "./ClothesSection.css";

function ClothesSection({ onCardClick, items, onAddClothes }) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <p className="clothes-section__title">Your items</p>
        <button className={"clothes-section__button"} onClick={onAddClothes}>
          + Add new
        </button>
      </div>
      <ul className="clothes-section__items">
        {items.map((item) => (
          <ItemCard key={item._id} onCardClick={onCardClick} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default ClothesSection;

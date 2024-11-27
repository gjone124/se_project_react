import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

/* TODO - pass "onCardClick={onCardClick}" as prop (to ClothesSection brackets) later to ItemCard; Kevin commented onCardClick out in tutorial video*/

function ClothesSection({ onCardClick, items, onAddClothes }) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <p>Your items</p>
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

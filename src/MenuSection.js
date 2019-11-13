import React from "react";
import Meal from "./Meal";

export default function MenuSection(props) {
  const {
    sectionTitle,
    menu,
    addProduct,
    removeProduct,
    calculateTotal
  } = props;

  return (
    <li className="menu-section">
      <h3 className="section-title">{sectionTitle}</h3>
      <ul className="meals-box">
        {menu.map(meal => {
          return (
            <Meal
              key={meal.id}
              meal={{ ...meal }}
              addProduct={addProduct}
              removeProduct={removeProduct}
              calculateTotal={calculateTotal}
            />
          );
        })}
      </ul>
    </li>
  );
}

import React from "react";
import Meal from "./Meal";

export default function MenuSection(props) {
  const { sectionTitle, menu } = props;

  return (
    <li className="menu-section">
      <h3 className="section-title">{sectionTitle}</h3>
      <div className="meals-box">
        {menu.map(meal => {
          return <Meal key={meal.id} {...meal} />;
        })}
      </div>
    </li>
  );
}

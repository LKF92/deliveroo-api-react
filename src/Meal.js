import React from "react";

export default function Meal(props) {
  const { id, title, description, price, picture, popular } = props;
  return (
    <li className="meal-card">
      <div className="meal-info">
        <h4 className="meal-title">{title}</h4>
        <p className="meal-description">{description}</p>
        <div className="meal-price">
          {price}€ {popular && <span className="populaire"> * Populaire</span>}
        </div>
      </div>
      {picture && (
        <div className="meal-picture">
          <img src={picture} alt="meal picture"></img>
        </div>
      )}
    </li>
  );
}

import React from "react";

export default function Meal(props) {
  const { id, title, description, price, picture, popular } = props;
  return (
    <li className="meal-card">
      <div className="meal-info">
        <h4 className="meal-title">{title}</h4>
        <p className="meal-description">{description}</p>
        <div className="meal-price">
          {price}€
          {popular && (
            <span className="populaire">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="#FF8001"
                stroke="#FF8001"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              Populaire
            </span>
          )}
        </div>
      </div>
      {picture && (
        <div className="meal-picture">
          <img src={picture} alt={title}></img>
        </div>
      )}
    </li>
  );
}

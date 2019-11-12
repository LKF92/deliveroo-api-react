import React from "react";

const Header = props => {
  const { title, description, picture } = props;
  return (
    <div className="wrapper">
      <section className="header-restaurant">
        <div className="description-box">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div>
          <img className="restaurant-image" src={picture} alt="" />
        </div>
      </section>
    </div>
  );
};
export default Header;

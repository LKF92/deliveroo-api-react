import React from "react";
import MenuSection from "./MenuSection";

export default function Menu(props) {
  const menuSections = Object.keys(props);
  return (
    <ul className="menu-sections">
      {menuSections.map((menuSection, index) => {
        return props[menuSection].length > 0 ? (
          <MenuSection
            key={index}
            sectionTitle={menuSection}
            menu={props[menuSection]}
          />
        ) : null;
      })}
    </ul>
  );
}

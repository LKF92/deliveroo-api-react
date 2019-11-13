import React from "react";
import MenuSection from "./MenuSection";

export default function Menu(props) {
  const { menu, addProduct, removeProduct, calculateTotal } = props;
  const menuSections = Object.keys(menu);
  return (
    <ul className="menu-sections">
      {menuSections.map((menuSection, index) => {
        return menu[menuSection].length > 0 ? (
          <MenuSection
            key={index}
            sectionTitle={menuSection}
            menu={menu[menuSection]}
            addProduct={addProduct}
            removeProduct={removeProduct}
            calculateTotal={calculateTotal}
          />
        ) : null;
      })}
    </ul>
  );
}

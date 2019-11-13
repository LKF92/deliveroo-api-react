import React from "react";
import PlusCircle from "./PlusCircle";
import MinusCircle from "./MinusCircle";

export default function Cart(props) {
  const { cart, addProduct, removeProduct, calculateTotal } = props;
  const total = calculateTotal();
  const selectionList = cart.map(meal => {
    return (
      <li className="checkout-meal">
        <div className="quantity-buttons">
          <div onClick={() => removeProduct(meal)}>
            <MinusCircle />
          </div>
          <div className="meal-quantity">{meal.quantity}</div>
          <div onClick={() => addProduct(meal)}>
            <PlusCircle />
          </div>
        </div>
        <div className="meal-title">{meal.title}</div>
        <div>{meal.price}€</div>
      </li>
    );
  });
  if (total) {
    return (
      <div className="cart">
        <button className="validate-btn">Valider mon panier</button>
        <ul className="cart__product-list">{selectionList}</ul>
        <hr />
        <div className="pre-total">
          <p>Sous-total</p>
          <p>{total.toFixed(2)}€</p>
        </div>
        <div className="pre-total">
          <p>Frais de livraison</p>
          <p>2,5€</p>
        </div>
        <hr />
        <div className="pre-total">
          <h3>Total</h3>
          <h3>{(total + 2.5).toFixed(2)}€</h3>
        </div>
      </div>
    );
  } else {
    return (
      <div className="cart">
        <button className="blocked-btn">Valider mon panier</button>
        <p className="empty-cart-text">Votre panier est vide</p>
      </div>
    );
  }
}

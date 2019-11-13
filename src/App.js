import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Header from "./Header";
import Menu from "./Menu";
import Cart from "./Cart";

import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [cart, setCart] = useState([]);

  const addProduct = selection => {
    let newCart = [...cart];
    let isFound = false;
    for (let product of newCart) {
      if (selection.id === product.id) {
        product.quantity += 1;
        isFound = true;
        break; // we break out of the loop if the product is found in the cart
      }
    }
    if (isFound === false) {
      newCart.push({
        id: selection.id,
        title: selection.title,
        price: selection.price,
        quantity: 1
      });
    }
    setCart(newCart);
  };
  const removeProduct = selection => {
    let newCart = [...cart];
    for (let product of newCart) {
      if (selection.id === product.id) {
        product.quantity -= 1;
        if (product.quantity === 0) {
          newCart.splice(newCart.indexOf(product), 1);
        }
        break; // we break out of the loop if the product is found in the cart
      }
    }
    setCart(newCart);
  };
  const calculateTotal = () => {
    return cart.reduce((acc, meal) => acc + meal.quantity * meal.price, 0);
  };

  const fetchData = async () => {
    const response = await axios.get("https://deliveroo-api.now.sh/menu");
    setData(response.data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData(); // data from API is only pulled once when loading
  }, []);
  // useEffect(() => {
  //   calculateTotal(); // the total is calculated everytime the art is modified
  // }, [cart]);

  return (
    <div className="App">
      <Navbar />
      {isLoading ? (
        <p>Fetching data...</p>
      ) : (
        <>
          <Header
            title={data.restaurant.name}
            description={data.restaurant.description}
            picture={data.restaurant.picture}
          />
          <div className="menu">
            <Menu menu={{ ...data.menu }} addProduct={addProduct} />
            <Cart
              cart={cart}
              addProduct={addProduct}
              removeProduct={removeProduct}
              calculateTotal={calculateTotal}
            />
          </div>
        </>
      )}
    </div>
  );
}
export default App;

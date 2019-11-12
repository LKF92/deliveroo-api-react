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

  const fetchData = async () => {
    const response = await axios.get("https://deliveroo-api.now.sh/menu");
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(); // data from API is only pulled once when loading
  }, []);

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
            <Menu {...data.menu} />
            <Cart />
          </div>
        </>
      )}
    </div>
  );
}
export default App;

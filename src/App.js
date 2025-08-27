import React, { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Product1 from "./components/Products/Product1";
import Product2 from "./components/Products/Product2";
import Product3 from "./components/Products/Product3";
import "./index.css";

function App() {
  const [currentTab, setCurrentTab] = useState("about");

  const renderContent = () => {
    switch (currentTab) {
      case "about":
        return <About />;
      case "product1":
        return <Product1 />;
      case "product2":
        return <Product2 />;
      case "product3":
        return <Product3 />;
      default:
        return <About />;
    }
  };

  return (
    <div className="app">
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <main>{renderContent()}</main>
    </div>
  );
}

export default App;
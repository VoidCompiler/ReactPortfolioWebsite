import React, { useState } from "react";

function Navbar({ currentTab, setCurrentTab }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleProductSelect = (product) => {
    setCurrentTab(product);
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <button
            className={currentTab === "about" ? "active" : ""}
            onClick={() => setCurrentTab("about")}
          >
            ABOUT ME
          </button>
        </li>
        <li className="dropdown">
          <button
            className={currentTab.startsWith("product") ? "active" : ""}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            MY PRODUCTS ▼
          </button>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li onClick={() => handleProductSelect("product1")}>
                Raise Your Tribe
              </li>
              <li onClick={() => handleProductSelect("product2")}>
                The Altered Lands
              </li>
              <li onClick={() => handleProductSelect("product3")}>
                Planetary Delivery
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
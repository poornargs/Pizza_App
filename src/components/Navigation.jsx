import React from "react";

import { Link } from "react-router-dom";

import { useCartCrud } from "../context/CartContext";

function Navigation(props) {
  const { cart } = useCartCrud();

  const cartStyle = {
    backgrounColor: "#f59e0d",
    display: "flex",
    padding: "6px 12px",
    borderRadius: "50px",
  };

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link to="/">
          <img style={{ height: 45 }} src="/images/logo.png" alt="logo" />
        </Link>
      </nav>
      <ul className="flex items-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="ml-6">
          <Link to="/items">Items</Link>
        </li>
        <li className="ml-6">
          <Link to="/cart">
            <div style={cartStyle}>
              <span className="font-bold">{cart.length}</span>
              <img src="/images/cart.png" className="ml-2" alt="cart-icon" />
            </div>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Navigation;

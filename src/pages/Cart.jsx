import React, { useEffect, useState } from "react";

import { useCartCrud } from "../context/CartContext";
function Cart(props) {
  const { navigateToPage, items, cart, updateCart } = useCartCrud();

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // prepare cart data

    const obj = {};

    cart.forEach((item) => {
      if (item._id in obj) {
        // found
        console.log("found");
        obj[item._id].push(item);
      } else {
        // not found
        console.log("not found");
        obj[item._id] = [item];
      }
    });

    const data = [];

    for (const key in obj) {
      data.push(obj[key]);
    }
    console.log("FInal Data log: ", data);

    setCartItems(data);
  }, [cart]);

  // add dynamic image

  return (
    <div className="container mx-auto w-full pb-24 lg:w1/2">
      <h1 className="my-12 font-bold">Cart Items</h1>

      <ul>
        {cartItems.map((item) => (
          <li className="mb-12">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img className="h-16" src="/images/peproni.png" alt="item" />
                <span className="font-bold ml-4 w-48">{item[0].name}</span>
              </div>
              <div>
                <button className="bg-yellow-500 px-4 py-2 rouned-full leading-none">
                  -
                </button>
                <b className="px-4">{item.length}</b>
                <button className="bg-yellow-500 px-4 py-2 rouned-full leading-none">
                  +
                </button>
              </div>
              <span>₹ {item[0].price}</span>
              <button className="bg-red-500 px-4 py-2 rouned-full leading-none text-white">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <hr className="my-6" />

      <div className="text-right">
        <strong>Grand Total:</strong>₹ 500
      </div>

      <div className="text-right mt-6">
        <button className="bg-yellow-500 px-4 py-2 rouned-full leading-none">
          Order Now
        </button>
      </div>
    </div>
  );
}

export default Cart;

import React, { useEffect, useState } from "react";

import { useCartCrud } from "../context/CartContext";
function Cart(props) {
  const { navigateToPage, items, cart, updateCart } = useCartCrud();

  const [cartItems, setCartItems] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    // prepare cart data

    const obj = {};

    // [1, 2, 1, 3] // cart

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

    // {
    //     1: [{item1}, {item2}],
    //     2: [{item1}],
    //     3: [{item1}],
    // } // obj

    const data = [];
    let count = 0;

    for (const key in obj) {
      // count grand total
      console.log(" Obj key : ", obj[key]);
      count += obj[key].length * obj[key][0]?.price;
      data.push(obj[key]);
    }

    console.log("Count: ", count);

    setGrandTotal(count);

    // [
    //   [1, 1],
    //     [2],
    //     [3]
    // ] // data
    console.log("FInal Data log: ", data);

    setCartItems(data);
  }, [cart]);

  function deleteItem(item) {
    console.log(item);

    const c = cart.filter((itm) => itm._id != item._id);

    updateCart(c);
  }

  function decreaseCount(item) {
    console.log(item);

    const c = [];

    let firstOccurance = false;

    for (const row of cart) {
      if (row._id == item._id) {
        // matching case

        if (firstOccurance == false) {
          firstOccurance = true;
        } else {
          // next occurance
          c.push(row);
        }
      } else {
        // other items
        c.push(row);
      }
    }

    updateCart(c);
  }

  // add dynamic image

  return (
    <div className="container mx-auto w-full pb-24 lg:w1/2">
      <h1 className="my-12 font-bold">Cart Items</h1>

      <ul>
        {cartItems.map((item, index) => (
          <li key={index} className="mb-12">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img className="h-16" src="/images/peproni.png" alt="item" />
                <span className="font-bold ml-4 w-48">{item[0].name}</span>
              </div>
              <div>
                <button
                  className="bg-yellow-500 px-4 py-2 rouned-full leading-none"
                  onClick={() => decreaseCount(item[0])}
                >
                  -
                </button>
                <b className="px-4">{item.length}</b>
                <button className="bg-yellow-500 px-4 py-2 rouned-full leading-none">
                  +
                </button>
              </div>
              <span>₹ {item[0].price}</span>
              <button
                className="bg-red-500 px-4 py-2 rouned-full leading-none text-white"
                onClick={() => deleteItem(item[0])}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <hr className="my-6" />

      <div className="text-right">
        <strong>Grand Total:</strong>₹ {grandTotal}
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

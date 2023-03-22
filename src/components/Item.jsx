import React from "react";

import { Link } from "react-router-dom";

import { useCartCrud } from "../context/CartContext";

function Item(props) {
  const { cart, updateCart, navigateToPage } = useCartCrud();

  const { item } = props;

  // console.log(item, " Item");

  function addItem(){
    
    const c = cart;
    c.push(item);
    updateCart(c);
  }


  return (
    <>
    <Link to={ '/items/' + item._id }>
        <img src={item.image} alt="pizza" />
        {/* <img src="/images/peproni.png" alt="pizza" /> */}

        <div className="text-center" >
            <h2 className="text-lg font-bold py-2">{item.name}</h2>
            <span className="bg-gray-200 py-1 rounded-full text-sm px-4">{item.size}</span>
        </div>

        <div className="flex justify-between items-center mt-4">
                <span> ₹ {item.price}</span>
                <button className="px-6 py-2 rounded-ful text-white font-bold mt-4 bg-yellow-500 hover:bg-yellow-600" onClick={() => addItem()}>
                    Add
                </button>
        </div>
    </Link>


    
    </>
  );
}

export default Item;

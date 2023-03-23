import React, { useEffect, useState } from "react";
import { useCartCrud } from "../context/CartContext";
import { useParams, useLocation } from "react-router-dom";

function ItemView(props) {
  const { navigateToPage, items, cart, updateCart } = useCartCrud();

  const [item, setItem] = useState({});

  // const params = useParams();
  const {search} = useLocation();

  const params = new URLSearchParams(search);

  console.log(params.get('id'), params.get('name'), params.get('age'), " Params", search);

  // trigger on component mount
  useEffect(() => {
    setItem(items.filter((item) => item._id == params.get('id'))[0]);
    console.log(item);
  }, [params.get('id')]);

  function addToCart() {
    console.log("item", item);
    updateCart([...cart, item]);
  }

  return (
    // <>test</>
    <div className="container max-auto mt-12">
      <button
        className="md-12 font-bold"
        onClick={() => {
          navigateToPage(-1);
        }}
      >
        Back
      </button>
      <br />

      <div className="flex">
        {/* <img src="/images/peproni.png" alt="pizza" /> */}
        <img src={item.image} alt="pizza" />
        <div className="ml-16">
          <h1 className="text-xl font-bold">{item?.name}</h1>
          <div className="text-md">{item?.size}</div>
          <div className="font-bold mt-2">₹ {item?.price}</div>
          <button
            className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4"
            onClick={() => addToCart()}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemView;

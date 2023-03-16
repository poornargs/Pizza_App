import React from "react";

import { useCartCrud } from "../context/CartContext";

import Item from "../components/Item";

function Items(props) {
  const { items } = useCartCrud();
  return (
    <div className="container mx-auto pb-24">
      <h1 className="text-lg font-bold my-8">Items</h1>
      <div className="grid grid-cols-5 my-8 gap-24">
        {items.map((item) => {
          return <Item key={item._id} item={item} />
        })}
      </div>
    </div>
  );
}

export default Items;

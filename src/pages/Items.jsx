import React from "react";

import { useCartCrud } from "../context/CartContext";

function Items(props) {
  const { items } = useCartCrud();
  return (
    <div className="container mx-auto pb-24">
      <h1 className="text-lg font-bold my-8">Items</h1>
      <div className="grid grid-cols-5 my-8 gap-24">
        {items.map((item) => {
          return <span>{item.name}</span>;
        })}
      </div>
    </div>
  );
}

export default Items;

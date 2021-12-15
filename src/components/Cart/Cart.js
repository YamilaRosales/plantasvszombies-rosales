import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const [items, addItem, removeItem, clear] = useContext(CartContext);

  return (
    <div>
      {items.maps((item) => {
        <div key={item.id}>
          <h1>{item.title}</h1>
          <h2>{item.price}</h2>
        </div>
      })}
    </div>
  );
}

export default Cart;

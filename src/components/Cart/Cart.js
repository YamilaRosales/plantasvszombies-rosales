import React, { useContext } from "react";
import { CartContext } from "../context/useContext";

function Cart() {
  const [items, addItem] = useContext(CartContext);

  return (
    <div>
      {items.maps((item) => {
        <div key={item.id}>
          <h1>{item.title}</h1>
        </div>;
      })}
    </div>
  );
}

export default Cart;

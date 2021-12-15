import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const [items, addItem, removeItem, clear] = useContext(CartContext);

  console.log("items en Cart:", items);
  const itemsAdded = items.map(function (item) {
    return (
      <div key={item.item.id}>
        <div>{item.item.name}</div>
        <div>{item.item.price}</div>
      </div>
    );
  });

  return (
    <div>
      {items && items.length > 0 ? itemsAdded : "No existen items agregados"}
    </div>
  );
}

export default Cart;

import { BsFillCartFill } from "react-icons/bs";
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const [items, addItem, removeItem, clear] = useContext(CartContext);
  let totalQty = 0;
  items.forEach((element) => {
    totalQty += element.qty;
  });
  return (
    <>
      {totalQty}
      <BsFillCartFill size={25} color="#282c34" />
    </>
  );
};
export default CartWidget;

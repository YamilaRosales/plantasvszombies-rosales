import React, { createContext, useState } from 'react'

export const CartContext = createContext ([])


const CartProvider = ({defaultValue=[], children}) =>{
    const [items, setItems] = useState([])

    const isInCart = (id) => {
        return items.some(i => i.id = id);
    }

    const addItem =  (item, qty)=>{
        return isInCart(item.id) ? null: setItems([...items, {item, qty: qty}]);
    }

    const removeItem = (itemId)=>{
        return isInCart(itemId) ? console.log("No se encontro el item a eliminar"): items.filter(item => item.id !== itemId);
    }

    const clear =()=>{
        return items.length =0;
    }
    return <CartContext.Provider value={[items, addItem, removeItem, clear ]}>{children}</CartContext.Provider>
}
export default CartProvider;

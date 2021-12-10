import React, { createContext, useState } from 'react'

export const CartContext = createContext ([])


const CartProvider = (children) =>{
    const [items, setItems] = useState([])

    const isInCart = (id) => {
        return items.some(i => i.id = id);
    }

    const addItem =  (item, qty)=>{
        return isInCart(item.id) ? null: setItems([...items, {item, qty: qty}]);
    }

    return <CartContext.Provider value={[items, addItem ]}>{children}</CartContext.Provider>
}
export default CartProvider;
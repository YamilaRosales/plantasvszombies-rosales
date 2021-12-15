import React, { createContext, useState } from 'react'

export const CartContext = createContext ([])


const CartProvider = ({defaultValue=[], children}) =>{
    const [items, setItems] = useState([])

    const isInCart = (id) => {
        return items.some(i => i.id = id);
    }
    

    const sum = (id, qty) => {
        let itemsAux = items;
        itemsAux.forEach(function(item){
           if(item.item.id === id)   
                item.qty+=qty;
        });
        setItems(itemsAux);
    }
    const addItem =  (item, qty)=>{
        if(isInCart(item.id)) 
            sum(item.id, qty);
        else
            setItems([...items, {item, qty: qty}]);
        console.log(items);
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

import React from 'react'
import ItemCount from '../Items/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useContext, CartContext } from "../context/CartContext";

const ItemDetail = ({item}) => {
    const [added, setAdded] = useState(false);

    const {items, addItem, removeItem, clear } = useContext(CartContext);

    const onAddHandler = (itemCount) =>{
        console.log("added");
        addItem(item, itemCount);
        setAdded(true);
    }

    
    return (
        <div>
            <img src={item.img} alt={item.name}></img>
            <h2>{item.name}</h2>
            <h4>{item.description}</h4>            
            <h5>Precio: {item.price}</h5>
            <h6>(Unidades disponibles: {item.stock})</h6>
            {
                added ? <Link to="/cart"><Button variant="primary" size="lg" active>ComprarAhora</Button></Link> : <ItemCount stock={item.stock} initial={1} onAdd={onAddHandler}/>
            }
            
        </div>
    )
}

export default ItemDetail;

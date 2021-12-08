import React from 'react'
import ItemCount from '../Items/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ItemDetail = ({item}) => {
    const [added, setAdded] = useState(false);
    
    const onAddHandler = (e) =>{
        e.PreventDefault();
        console.log("added");
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

import React from 'react'

const ItemDetail = ({item}) => {
    return (
        <div>
            <img src={item.img} alt={item.name} width={300}></img>
            <h2>{item.name}</h2>
            <h3>{item.price}</h3>
            <h4>{item.shortDescription}</h4>            
        </div>
    )
}

export default ItemDetail;

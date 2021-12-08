import Item from "../Items/Item";

import "./ItemList.css";

const ItemList = ({items, onAddHandler})=>{
    let elements = items.map((item) => (<div className="bg-light border item">
                                        <Item item={item}/>
                                        </div>)); 

    return (
        <div>{elements}</div>
    );                                            
}
export default ItemList;
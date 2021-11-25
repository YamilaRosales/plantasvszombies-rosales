import Item from "../Items/Item";
import ItemCount from "../Items/ItemCount";
import "./ItemList.css";

const ItemList = ({items, onAddHandler})=>{
    let elements = items.map((item) => (<div className="bg-light border item">
                                        <Item item={item}/>
                                        <ItemCount stock={item.stock} initial={1} onAdd={onAddHandler} />
                                        </div>)); 

    return (
        <div>{elements}</div>
    );                                            
}
export default ItemList;

import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import ItemCount from "../Items/ItemCount";
import "./ItemListContainer.css";

const ItemListContainer = ({items, description, onAddHandler}) => {
    let elements = items.map((element) => (<div className="bg-light border item">
                                        <h2>{element.name}</h2> 
                                        <p>{element.description}</p>
                                        <ItemCount stock={element.stock} initial={1} onAdd={onAddHandler} />
                                        </div>));

    return (
        <Container fluid>
            <h3 style={{backgroundColor:"GrayText"}}>{description}</h3>
            <Stack>
                {elements}
            </Stack>            
        </Container>
    )
}
export default ItemListContainer;
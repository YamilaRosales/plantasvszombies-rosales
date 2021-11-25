
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = ({items, description, onAddHandler}) => {
    
    return (
        <Container fluid>
            <h3 style={{backgroundColor:"GrayText"}}>{description}</h3>
            <Stack>
                <ItemList items={items} onAdd={onAddHandler}/>
            </Stack>            
        </Container>
    )
}
export default ItemListContainer;
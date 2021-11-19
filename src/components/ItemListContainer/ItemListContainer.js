
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";

const ItemListContainer = ({items, description}) => {
    let elements = items.map((i) => (<div className="bg-light border">{i}</div>));
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
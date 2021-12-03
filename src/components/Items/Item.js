import Card from "react-bootstrap/Card";
import "./Item.css"
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  console.log("name: ",item.name);
   return (
    <Card style={{height: "9rem"}}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text className="description">{item.shortDescription}</Card.Text>
        <Card.Link href={`/item/${item.id}`}>Ver Detalle</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Item;

import Card from "react-bootstrap/Card";
import "./Item.css"

const Item = ({ item }) => {
  console.log("name: ",item.name);
   return (
    <Card style={{height: "auto"}}>
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

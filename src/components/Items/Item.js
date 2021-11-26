import Card from "react-bootstrap/Card";
import "./Item.css"
const Item = ({ item }) => {
  return (
    <Card style={{height: "30rem"}}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text className="description">{item.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Item;

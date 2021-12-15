import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function Cart() {
  const [items, addItem, removeItem, clear] = useContext(CartContext);

  console.log("items en Cart:", items);

  const handlerRemoveItem = (itemId) => {
    removeItem(itemId);
  };
  let total = 0;
  const itemsAdded = items.map(function (item) {
    total += item.qty * item.item.price;
    return (
      <tr key={item.item.id}>
        <td>{item.item.name}</td>
        <td>{item.item.price}</td>
        <td>{item.qty}</td>
        <td>
          <Button onClick={() => handlerRemoveItem(item.item.id)}>
            Eliminar
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      {items && items.length > 0 ? (
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{itemsAdded}</tbody>
          </Table>
          <h2>Total: ${total}</h2>
        </div>
      ) : (
        "No existen items agregados"
      )}
      <div>
        <Link to="/">
          <Button variant="primary" size="sm" active>
            Volver
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;

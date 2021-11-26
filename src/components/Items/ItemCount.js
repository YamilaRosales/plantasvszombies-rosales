import React, { useState } from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";
import "./ItemCount.css";

export default function ItemCount({ stock, initial, onAdd }) {
  const [counterItem, setCounterItem] = useState(initial);

  const handlerCounterItemUp = () => {
    if (counterItem < stock) setCounterItem(counterItem + 1);
  };

  const handlerCounterItemDown = () => {
    if (counterItem >= 1) setCounterItem(counterItem - 1);
  };

  const onAddHandler = () => {
    if (counterItem > 0 && counterItem <= stock) {
      onAdd(counterItem, stock);
    }
  };

  return (
    <div>
        <div className="CounterSection">
        <InputGroup className="mb-3">
          <Button variant="outline-secondary" onClick={handlerCounterItemDown}>
            -
          </Button>
          <FormControl value={counterItem} />
          <Button variant="outline-secondary" onClick={handlerCounterItemUp}>
            +
          </Button>              
        </InputGroup>
        </div> 
        <div className="button-action"><button onClick={onAddHandler}>Agregar</button>
        </div>       
      
    </div>
  );
}

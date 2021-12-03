import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";
import React, { useState, useEffect } from "react";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  console.log("id: ", id);
  useEffect(() => {
    setTimeout(() => {
      //no sé como buscar por id dentro del json.
      fetch("/Data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((respJSON) => {
          console.log("resultado: ",respJSON);
          setItem(respJSON.filter((elem) => elem.id == id)[0]);
        })
        .catch((err) => console.log("Error: ", err));
    }, 2000);
  }, [id]);

  return (
    <Container fluid>
      <Stack>
        <ItemDetail item={item} />
      </Stack>
    </Container>
  );
};
export default ItemDetailContainer;

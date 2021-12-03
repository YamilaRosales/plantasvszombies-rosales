import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import { useParams } from "react-router";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = ({description, onAddHandler }) => {
  const [listItems, setListItems] = useState([]);
  const { categoryId } = useParams();

    console.log("category: ",categoryId);
  useEffect(() => {
    setTimeout(() => {
      fetch("/Data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((respJSON) => {
          console.log("resultado lectura data.json: ", respJSON);
          setListItems(
            respJSON.filter((elem) => elem.categoryId == categoryId || categoryId == undefined)
          );
        })
        .catch((err) => console.log("Error: ", err));
    }, 2000);
  }, [categoryId]);

  return (
    <Container fluid>
      <h3 style={{ backgroundColor: "GrayText" }}>{description}</h3>
      <Stack>
        <ItemList items={listItems} onAdd={onAddHandler} />
      </Stack>
    </Container>
  );
};
export default ItemListContainer;

import React from "react";
import NavBar from "../NavBar/NavBar";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import Cart from "../Cart/Cart";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const Router = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ItemListContainer
                description="Cursos"
                onAddHandler={(a, b) => console.log("se agregó al carrito")}
              />
            }
          />
          <Route
            path="/category/:categoryId"
            element={
              <ItemListContainer
                description="Cursos"
                onAddHandler={(a, b) => console.log("se agregó al carrito")}
              />
            }
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from "./components/Cart/Cart";

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

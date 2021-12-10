import "./App.css";
import React from "react";
import CartProvider from "./components/context/useContext";
import Router from "./Router/Router";
function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router />
      </CartProvider>
    </div>
  );
}

export default App;

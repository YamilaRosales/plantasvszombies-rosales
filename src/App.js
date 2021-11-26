import "./App.css";
import React, { useState, useEffect }  from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { ItemsMock } from "./components/ItemsMock/ItemsMock";



function App() {
  
  const [listItems, setListItems] = useState([]);
  
  useEffect(() => {
    ItemsMock.getListItems()
      .then((data) => setListItems(data))
      .catch((err) => console.log(err));    
  }, [])

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer items={listItems} description="Cursos" onAddHandler={(a,b)=>(console.log("se agregó al carrito"))}/>
    </div>
  );
}

export default App;

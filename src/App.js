import "./App.css";
import React, { useState, useEffect }  from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


function App() {
  
  const [listItems, setListItems] = useState([]);
  
  useEffect(() => {
    setTimeout(() => {
        fetch('./Data.json',{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        })
        .then(response => response.json())
        .then(respJSON => {console.log(respJSON.results); setListItems(respJSON.results)})
        .catch((err) => console.log('Error: ',err))  
      },2000)    
  }, [])

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer items={listItems} description="Cursos" onAddHandler={(a,b)=>(console.log("se agregó al carrito"))}/>
    </div>
  );
}

export default App;

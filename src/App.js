import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  let listItems=["Santa Rita","Potus", "Peperomia", "Suculenta","Malvones"];
  return (
    <div className="App">
      <NavBar/>    
      <ItemListContainer items={listItems} description="Lista"/>
    </div>
  );
}

export default App;

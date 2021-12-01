
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import ItemDetail from "../ItemDetail/ItemDetail";
import React, { useState, useEffect }  from "react";

const ItemDetailContainer = ({itemId}) => {
    const [item, setitem] = useState({})

    useEffect(() => {
    setTimeout(() => {
        //no sé como buscar por id dentro del json.
        fetch('./Data.json',{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        })
        .then(response => response.json())
        .then(respJSON => {console.log(respJSON.results); setitem(respJSON.results)})
        .catch((err) => console.log('Error: ',err))  
      },2000)    
  }, [])
        

    return (
        <Container fluid>
            <Stack>
                <ItemDetail item={item}/>
            </Stack>            
        </Container>
    )
}
export default ItemDetailContainer;
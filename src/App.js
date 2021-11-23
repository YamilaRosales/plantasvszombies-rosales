import "./App.css";
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  let listItems = [
    {
      name: "Santa Rita",
      description:
        "Son arbustos o árboles pequeños, algunos trepadores perennes en las zonas lluviosas todo el año, o bien caducifolios en las de estación seca; de entre 1 hasta 12 m de altura. Se sujetan en otras plantas usando sus afiladas púas que tienen la punta cubierta de una sustancia cerosa negra. Las hojas son alternas, simples y de forma ovalado-acuminada de 4-12 cm de largo y 2-6 de ancho. Las flores, hermafroditas, son axilares, conspicuas, tubulares, con 5-6 lóbulos cortos, generalmente blancas, organizadas en grupos de 3, cada una insertada en una bráctea persistente de aspecto papiráceo y habitualmente vivamente coloreada de blanco, amarillo, rosado, magenta, purpúreo, rojo, anaranjado... El número de estambres varia de 5 a 10; con filamentos cortos y soldados en la base. El ovario es fusiforme, glabro o pubescente, con estilo lateral corto. El fruto es un aquenio pentámero estrecho, fusiforme o cilíndrico.",
      stock: 5,
      itemsAdded:0
    },
    {
      name: "Potus",
      description:
        "Liana que puede alcanzar 20 m de alto, con tallos de hasta 4 cm de diámetro. Trepa mediante raíces aéreas que se enganchan a las ramas de los árboles. Las hojas son perennes, alternas y acorazonadas, enteras en las plantas jóvenes, pero irregularmente pinnadas en las maduras y de hasta 1 m de largo por 45 cm de ancho (en las plantas jóvenes no superan los 20 cm de largo). Esta planta florece muy raramente, ya sea en la naturaleza o cultivada, debido a que no sintetiza la fitohormona giberelina, produciéndose la floración si se suministra de manera artificial.",
      stock: 4,
      itemsAdded:0
    },
    {
      name: "Peperomia",
      description:
        "Aunque variando considerablemente en apariencia, generalmente tienen tallos gruesos, rectos, con hojas carnosas. Las flores de Peperomia típicamente son de tipo espádice cónicas amarillas a pardas. Se las cultiva mucho por su follaje ornamental. Son mayormente nativas de América tropical. Son compactas y pequeñas, usualmente no exceden de 3 dm de altura. Suelen tener tallos y hojas carnosos. Pueden ser hojas cordadas, lanceoladas; de 2-10 cm de largo. Pueden ser verdes o con tiras, marmoleadas, o bordeadas con verde pálido, rojo o gris, y los peciolos de algunas pueden ser rojos. Flores diminutas, inapreciables; con excepciones.",
      stock: 7,
      itemsAdded:0
    },
    {
      name: "Suculenta",
      description:
        "Las plantas suculentas —del latín suculentus, 'jugoso'— o crasas son aquellas en las que algún órgano está especializado en el almacenamiento de agua en cantidades mayores que las plantas sin esta adaptación. Estos órganos de reserva tienen una alta proporción de tejido parenquimático.​ Su adaptación les permite mantener reservas de agua durante períodos prolongados, y sobreviven a los largos períodos de sequía en climas áridos. Uno de los ejemplos más conocidos de suculencia es el de los tallos de los cactus del Nuevo Mundo, similar al de varias euforbiáceas y apocináceas africanas. Ejemplos de hojas suculentas se encuentran en Aloe, Agave, y en las crasuláceas.",
      stock: 6,
      itemsAdded:0
    },
    {
      name: "Malvon",
      description:
        "El Pelargonium x hortorum presenta un tallo suculento, erguido, pubescente, con estípulas en la base de las hojas y muy ramificados. Tienen sección cilíndrica y una altura de 30 a 60 cm, poseen eustela de tipo ectofloica con discos de almidón y haces colaterales.",
      stock: 6,
      itemsAdded:0
    }
  ];

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer items={listItems} description="Cursos" onAddHandler={(a,b)=>(console.log("se agregó al carrito"))}/>
    </div>
  );
}

export default App;

import React, { useState } from 'react'; //Destructuring

import Count from './Count'
import Controls from './Controls'

import "./App.css";

function App() {

  const [count, setCount] = useState(0); // Hook, recibe como parametro

  return (
    <div className="">
      <Count num={count} /> {/* num es el prop que recibe los datos */}
      <Controls 
        aumentar= { ()=> setCount(count + 1) } 
        disminuir = { ()=> setCount(count - 1 ) }
      /> {/* Funcion que va sumando y restando desde state */}
    </div>
  );
}

export default App;

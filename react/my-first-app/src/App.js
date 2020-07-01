import React, { useState } from "react"; //Destructuring

import Count from "./Count";
import Controls from "./Controls";

import "./App.css";

function App() {
  const [count, setCount] = useState(0); // Hook, recibe como parametro
  const [pollito, setPollitoName] = useState('Toto')
  
  return (
    <div className="">
      <Count num={count} /> {/* num es el prop que recibe los datos */}
      <Controls
        aumentar={() => setCount(count + 1)}
        disminuir={() => setCount(count - 1)}
      />
      <p>{pollito}</p>
      <input value={count} />
      {/* Funcion que va sumando y restando desde state */}
    </div>
  );
}

export default App;

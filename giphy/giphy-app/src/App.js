import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Buscador from "./components/Buscador/Buscador";
import EffectExample from "./components/EffectExample/EffectExample";
function App() {
  return (
    <div className="App container">
      <Buscador />
      <EffectExample />
    </div>
  );
}

export default App;

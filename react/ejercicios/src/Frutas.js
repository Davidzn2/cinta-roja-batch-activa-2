import React from "react";

function Frutas(props) {
  return (
    <ul>
      {props.frutas.map((fruta) => {
        return <li key={fruta}>{fruta}</li>;
      })}
    </ul>
  );
}

export default Frutas;
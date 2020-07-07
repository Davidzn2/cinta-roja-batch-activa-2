import React, { useState } from "react";
import axios from "axios";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";

function Create() {
  const URL = "https://todos-back-devf-activa.herokuapp.com/todos/";
  // ESTO ES EL ESTADO, AQUI ESTA LO QUE VOY A MANDAR A LA API
  const [name, setName] = useState("");
  const [done, setDone] = useState(false);
  const [priority, setPriority] = useState("");

  // FUNCION QUE BORRA TODO AL ENVIAR
  const clear = () => {
    setName("");
    setDone(false);
    setPriority("");
  };

  const saveTodo = (event) => {
    event.preventDefault();
    console.log("Dieron Click en enviar!");
    if (priority == 0) {
      alert("Tu prioridad no es valida, por favor selecciona una opcion");
    } else {
      axios.post(URL, {
          name,
          done,
          priority,
        })
        .then(() => {
          alert("Creado Con Exito");
          clear(); //LLAMO A FUNCION QUE BORRA TODO AL ENVIAR
        })
        .catch((error) => {
          alert("Hubo un error, revisa que paso");
          console.log(error);
        });
    }
  };
  return (
    <>
      <Header />

      <div className="container">
        <h3>Crear un To Do:</h3>
        <form onSubmit={saveTodo}>
          <div className="form-group">
            <label>¿Que tienes que hacer?</label>
            <input
              className="form-control"
              type="text"
              placeholder="Nombre"
              value={name}
              required
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <label>¿Ya esta hecho?</label>

            <input
              className="form-control"
              type="checkbox"
              value={done}
              onChange={() => {
                if (!done) {
                  setDone(true);
                } else {
                  setDone(false);
                }
              }}
            />
            <label>Selecciona el nivel de prioridad de tu To Do</label>
            <select
              className="form-control"
              name="priority"
              value={priority}
              onChange={(event) => {
                setPriority(event.target.value);
              }}
            >
              <option value="0">Selecciona una opcion</option>
              <option value="3">Baja</option>
              <option value="2">Media</option>
              <option value="1">Alta</option>
            </select>
            <button type="submit" className="btn btn-danger">
              Crear To Do
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Create;

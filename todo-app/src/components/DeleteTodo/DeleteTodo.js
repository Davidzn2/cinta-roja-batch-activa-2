import React, {} from "react";
import axios from "axios";

export default function DeleteTodo(props) {
  const URL = `https://todos-back-devf-activa.herokuapp.com/todos/${props._id}`;
  const useDelete = () => {
    axios.delete(URL)
    .then((response)=>{
        alert('To Do Borrado')
        window.location.reload()
    }).catch((error)=>{
        alert(error)
    })
  }


  return (
    <>
      <button onClick={useDelete} className="btn btn-dark">Borrar</button>
    </>
  );
}

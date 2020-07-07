import React, {useState} from "react";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";

import axios from 'axios';
function Home() {
  const [todos, setTodos] = useState([]);
  const URL = "https://todos-back-devf-activa.herokuapp.com/todos/";
  const getTodos = ()=>{
    axios.get(URL)
      .then((response)=>{
        let allTodos = response.data
        setTodos(allTodos)
      }).catch((err)=>{
        console.log(err)
      })
  }
  getTodos()
  return (
    <>
      <Header />
        <h2>Bienvenido, esto es lo que hay por hacer:</h2>
        <ul>
        {
          todos.map((todo)=>{
            return <li key={todo._id}>{todo.name}</li>
          })
        }
        </ul>
       
      <Footer />
    </>
  );
}

export default Home;

import React, { useState, useEffect } from "react";
import TodoCard from "../../TodoCard/TodoCard";
import axios from "axios";

function TodoIndividual(props) {
  const [todo, setTodo] = useState([]);
  const URL = `https://todos-back-devf-activa.herokuapp.com/todos/${props.id}`;
  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        let oneTodo = response.data;
        setTodo(oneTodo);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      <TodoCard
        priority={todo.priority}
        name={todo.name}
        done={todo.done}
        _id={todo._id}
        key={todo._id}
      />
    </>
  );
}

export default TodoIndividual;

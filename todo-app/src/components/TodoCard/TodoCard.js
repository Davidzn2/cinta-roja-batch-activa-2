import React from "react";
import { Link } from 'react-router-dom'
import DeleteTodo from "../DeleteTodo/DeleteTodo";
const TodoCard = (props) => {
  const background = {
    "1": "card text-white bg-danger",
    "2": "card text-white bg-warning",
    "3": "card text-white bg-success",
  };
  return (
    <div className={background[props.priority]}>
      <div className="card-body">
        <div className="card-title">
          <h2>{props.name}</h2>
        </div>
        <div className="card-text">
          {props.done ? <p>Done</p> : <p>Not done</p>}
          <Link to={props._id} >Hola </Link>
          <DeleteTodo _id={props._id} />
        </div>
      </div>
    </div>
  );
};

export default TodoCard;

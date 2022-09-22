import React, { FC, useContext } from "react";
import { TodoContext } from "../context/AppContext";
import { ITodo, TodoContextInterface } from "../utils/interfaces";


interface Props {
  task: string;
}

const Card = ({ todo }:{todo: ITodo}) => {

  const {removeTodo} = useContext(TodoContext)

 

  return (
    <div className="flex justify-between items-center bg-white px-5 rounded-md py-3 my-2">
      <h2 className="text-xl w-96">{todo.task}</h2>

      <div className="">
        <button className="bg-red-400 text-white px-10 h-10 mx-2 rounded-md" onClick={() => removeTodo(todo.id)}>Remove</button>
      </div>
    </div>
  );
};

export default Card;

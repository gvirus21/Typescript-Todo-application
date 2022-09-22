import React from "react";
import { ITodo } from "../utils/interfaces";
import { useState } from "react";

type Props = {
  todos: ITodo[];
  saveTodo: (todo: ITodo) => void;
};

const Input = ({ saveTodo, todos }: Props) => {
  const [task, setTask] = useState("");

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const addTaskHandler = () => {
    const todo: ITodo = {
      id: todos.length,
      task: task,
      status: false,
    };

    console.log(todo);

    if (todo.task !== "") {
      saveTodo(todo);
    }
    //resetting the input value
    setTask("");
  };

  return (
    <div className="flex flex-col justify-center items-center w-5/6 mt-10">

      <h1 className="text-3xl font-semibold">Enter Your Task</h1>
      <div className="mt-10 flex justify-center items-center">
      <input
        type={"text"}
        value={task}
        className="h-10 w-96 px-2 py- bg-slate-100 text-2xl"
        onChange={(e) => inputChangeHandler(e)}
        ></input>
      <button
        className="h-10 w-32 bg-slate-300 mx-5"
        onClick={() => addTaskHandler()}
        >
        Add
      </button>
        </div>
    </div>
  );
};

export default Input;

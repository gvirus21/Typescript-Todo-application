import React, { useReducer, createContext } from "react";
import type { ReactNode } from "react";
import { ITodo, TodoContextInterface } from "../utils/interfaces";

export const TodoContext = createContext<TodoContextInterface | undefined>(
  undefined
);

type TodoContextProviderProps = {
  children: ReactNode;
};

const initialState: ITodo[] = [];

export type ActionType =
  | { type: "Save"; payload: ITodo }
  | { type: "Remove"; payload: number };

export type StateType = typeof initialState;
export type Dispatch = (action: ActionType) => void;

export const todoReducer = (
    state: StateType,
    action: ActionType
    ): StateType => {
    switch (action.type) {
        case "Save":
        return [...state, action.payload];
        case "Remove":
        return state.filter((todo) => {
            if (todo.id !== action.payload) {
            return todo;
            }
        });

        default:
        state;
    }

    return state;
    };

    
    const TodoContextProvider = ({ children }: TodoContextProviderProps) => {

  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const saveTodo = (todo: ITodo) => {
    dispatch({ type: "Save", payload: todo });
  };

  const removeTodo = (id: number) => {
    dispatch({ type: "Remove", payload: id });
  };

  const value = {
    todos,
    saveTodo,
    removeTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoContextProvider;

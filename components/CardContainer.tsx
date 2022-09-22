import Card from "./Card"
import { FC, useContext } from "react"
import AppContext from "../context/AppContext"
import { ITodo } from "../utils/interfaces"


const CardContainer = ({todos}:{todos: ITodo[]}) => {

  return (
    <div className="mt-20">
        {todos.map((todo) => {
            return(
                <Card key={todo.id} todo={todo}/>
            )
        })}
    </div>
  )
}

export default CardContainer
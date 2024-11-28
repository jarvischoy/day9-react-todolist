import React, { useContext } from "react"
import TodoItem from "./TodoItem"
import { TodoContext } from "../context/TodoContext"
import TodoGenerator from "./TodoGenerator"

const TodoGroup = () => {
  const { state } = useContext(TodoContext)

  const todoItems = state.map((todo) => {
    return <TodoItem key={todo.id} text={todo.text} />
  })

  return <>
    {todoItems}
    <TodoGenerator />
  </>
}

export default TodoGroup
import React, { useContext } from "react"
import TodoItem from "./TodoItem"
import { TodoContext } from "../context/TodoContext"
import TodoGenerator from "./TodoGenerator"
import styles from "./TodoGroup.module.css"

const TodoGroup = () => {
  const { state } = useContext(TodoContext)

  const todoItems = state.map((todo) => {
    return <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done} />
  })

  return <div className={styles.groupContainer}>
    {todoItems}
    <TodoGenerator />
  </div>
}

export default TodoGroup
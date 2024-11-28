import React from "react"
import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"
import styles from "./TodoItem.module.css"

const TodoItem = (props) => {
  const { id, text, done } = props
  const { dispatch } = useContext(TodoContext)

  const handleDelete = () => {
    dispatch({ type: "DELETE", payload: { id } })
  }

  const handleToggle = () => {
    dispatch({ type: "TOGGLE", payload: { id } })
  }

  return <div className={styles.itemContainer}>
    <div className={done ? styles.done : styles.notDone} onClick={handleToggle}>
      {text}
    </div>
    <button onClick={handleDelete}>x</button>
  </div>
}

export default TodoItem
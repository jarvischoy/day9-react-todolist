import React from "react"
import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"
import { ActionEnum } from "../enum/ActionEnum"
import styles from "./TodoItem.module.css"
import { deleteTodos, updateTodos } from "../api/todos"

const TodoItem = ({ todo }) => {
  const { id, text, done } = todo
  const { dispatch } = useContext(TodoContext)

  const handleDelete = async () => {
    await deleteTodos(id)
      .then(() => dispatch({ type: ActionEnum.DELETE, payload: { id } }))
  }

  const handleToggle = async () => {
    await updateTodos({ id, text, done: !done })
      .then(() => dispatch({ type: ActionEnum.TOGGLE, payload: { id } }))
  }

  return <div className={styles.itemContainer}>
    <div className={done ? styles.done : styles.notDone} onClick={handleToggle}>
      {text}
    </div>
    <button className={styles.deleteButton} onClick={handleDelete}>x</button>
  </div>
}

export default TodoItem
import React, { useState } from "react"
import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"
import { ActionEnum } from "../enum/ActionEnum"
import styles from "./TodoItem.module.css"
import { deleteTodos, updateTodos } from "../api/todos"
import { Button, Spin } from "antd"

const TodoItem = ({ todo }) => {
  const { id, text, done } = todo
  const { dispatch } = useContext(TodoContext)
  const [isLoading, setIsLoading] = useState(false)

  const handleDelete = async () => {
    setIsLoading(true)
    await deleteTodos(id)
      .then(() => dispatch({ type: ActionEnum.DELETE, payload: { id } }))
      .catch((error) => console.error("Failed to delete todo", error))
      .finally(() => setIsLoading(false))
  }

  const handleToggle = async () => {
    setIsLoading(true)
    await updateTodos({ id, text, done: !done })
      .then(() => dispatch({ type: ActionEnum.TOGGLE, payload: { id } }))
      .catch((error) => console.error("Failed to toggle todo", error))
      .finally(() => setIsLoading(false))
  }

  return <Spin spinning={isLoading}>
    <div className={styles.itemContainer}>
      <div className={done ? styles.done : styles.notDone} onClick={handleToggle}>
        {text}
      </div>
      <Button danger className={styles.deleteButton} onClick={handleDelete}>x</Button>
    </div>
  </Spin>
}

export default TodoItem
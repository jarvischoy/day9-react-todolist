import React, { useContext, useEffect, useState } from "react"
import TodoGroup from "./TodoGroup"
import styles from "./TodoList.module.css"
import { TodoContext } from "../context/TodoContext"
import { ActionEnum } from "../enum/ActionEnum"
import { getTodos } from "../api/todos"

const TodoList = () => {
  const { dispatch } = useContext(TodoContext)
  const [isLoading, setIsLoading] = useState(false)

  const onLoad = async () => {
    setIsLoading(true)
    await getTodos()
      .then((todos) => dispatch({ type: ActionEnum.LOAD, payload: todos.data }))
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    onLoad()
  }, [])

  return <>
    <div className={styles.title}>Todo List</div>
    <TodoGroup isLoading={isLoading} />
  </>

}

export default TodoList
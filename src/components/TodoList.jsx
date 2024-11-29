import React, { useContext, useEffect, useState } from "react"
import TodoGroup from "./TodoGroup"
import styles from "./TodoList.module.css"
import { TodoContext } from "../context/TodoContext"
import { ActionEnum } from "../enum/ActionEnum"
import { getTodos } from "../api/todos"

const TodoList = () => {
  const { dispatch } = useContext(TodoContext)

  const onLoad = async () => {
    const todos = await getTodos()
    dispatch({ type: ActionEnum.LOAD, payload: todos.data })
  }

  useEffect(() => {
    onLoad()
  }, [])

  return <>
    <div className={styles.title}>Todo List</div>
    <TodoGroup />
  </>

}

export default TodoList
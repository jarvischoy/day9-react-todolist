import React, { useContext } from "react"
import TodoGenerator from "./TodoGenerator"
import TodoItem from "./TodoItem"
import { TodoContext } from "../context/TodoContext"
import { TodoListEnum } from "../enum/TodoListEnum"
import styles from "./TodoGroup.module.css"

const TodoGroup = () => {
  const { state } = useContext(TodoContext)

  const todoItems = state.map((todo) => {
    return <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done} />
  })

  return <div className={styles.groupContainer}>
    {state.length === 0 ? TodoListEnum.ADD_THE_THINGS_YOU_NEED_TO_DO_TODAY : todoItems}
    <TodoGenerator />
  </div>
}

export default TodoGroup
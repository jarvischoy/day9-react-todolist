import React, { useContext } from "react"
import { TodoContext } from "../context/TodoContext"
import { TodoListEnum } from "../enum/TodoListEnum"
import TodoGenerator from "./TodoGenerator"
import styles from "./TodoGroup.module.css"
import TodoItem from "./TodoItem"

const TodoGroup = () => {
  const { state } = useContext(TodoContext)

  const todoItems = state.map((todo) => {
    return <TodoItem key={todo.id} todo={todo} />
  })

  return <div className={styles.groupContainer}>
    {
      state === null || state.length === 0 ?
        <div className={styles.placeholder}>
          {TodoListEnum.ADD_THE_THINGS_YOU_NEED_TO_DO_TODAY}
        </div> :
        todoItems
    }
    <TodoGenerator />
  </div>
}

export default TodoGroup
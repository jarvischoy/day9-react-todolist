import React from "react"
import TodoGroup from "./TodoGroup"
import styles from "./TodoList.module.css"

const TodoList = () => {
  return <>
    <div className={styles.title}>Todo List</div>
    <TodoGroup />
  </>

}

export default TodoList
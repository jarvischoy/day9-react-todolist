import React, { useContext, useState } from "react"
import { TodoContext } from "../context/TodoContext"
import { ActionEnum } from "../enum/ActionEnum"
import styles from "./TodoGenerator.module.css"
import { TodoListEnum } from "../enum/TodoListEnum"
import { addTodos } from "../api/todos"

const TodoGenerator = () => {
  const [text, setText] = useState("")
  const { dispatch } = useContext(TodoContext)

  const handleInputChange = (e) => {
    if (e.target.value.length > 100) return
    setText(e.target.value)
  }

  const handleAdd = async () => {
    const todo = { text: text, done: false }
    if (text !== "") {
      await addTodos(todo)
      dispatch({ type: ActionEnum.ADD, payload: todo })
    }
    setText("")
  }

  return <div className={styles.generatorContainer}>
    <input type="text" placeholder={TodoListEnum.INPUT_PLACEHOLDER} value={text} onChange={handleInputChange} />
    <button onClick={handleAdd}>add</button>
  </div >

}

export default TodoGenerator
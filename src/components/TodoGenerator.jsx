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
    const trimmedText = text.trim()
    if (text !== "") {
      try {
        const response = await addTodos({ text: trimmedText, done: false })
        dispatch({ type: ActionEnum.ADD, payload: response.data })
      } catch (error) {
        console.error("Failed to add todo", error)
      }
      setText("")
    }
  }

  return <div className={styles.generatorContainer}>
    <input type="text" placeholder={TodoListEnum.INPUT_PLACEHOLDER} value={text} onChange={handleInputChange} />
    <button onClick={handleAdd}>add</button>
  </div >

}

export default TodoGenerator
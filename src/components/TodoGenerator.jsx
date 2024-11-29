import React, { useContext, useState } from "react"
import { TodoContext } from "../context/TodoContext"
import { ActionEnum } from "../enum/ActionEnum"
import styles from "./TodoGenerator.module.css"
import { TodoListEnum } from "../enum/TodoListEnum"

const TodoGenerator = () => {
  const [text, setText] = useState("")
  const { dispatch } = useContext(TodoContext)

  const handleInputChange = (e) => {
    if (e.target.value.length > 100) return
    setText(e.target.value)
  }

  const handleAdd = () => {
    text && dispatch({ type: ActionEnum.ADD, payload: { text } })
    setText("")
  }

  return <div className={styles.generatorContainer}>
    <input type="text" placeholder={TodoListEnum.INPUT_PLACEHOLDER} value={text} onChange={handleInputChange} />
    <button onClick={handleAdd}>add</button>
  </div >

}

export default TodoGenerator
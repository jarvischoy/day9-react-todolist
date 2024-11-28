import React, { useContext, useState } from "react"
import { TodoContext } from "../context/TodoContext"
import { ActionEnum } from "../enum/ActionEnum"
import styles from "./TodoGenerator.module.css"

const TodoGenerator = () => {
  const [text, setText] = useState("")
  const { dispatch } = useContext(TodoContext)

  const handleInputChange = (e) => {
    setText(e.target.value)
  }

  const handleAdd = () => {
    text && dispatch({ type: ActionEnum.ADD, payload: { text } })
    setText("")
  }

  return <div className={styles.generatorContainer}>
    <input type="text" value={text} onChange={handleInputChange} />
    <button onClick={handleAdd}>add</button>
  </div >

}

export default TodoGenerator
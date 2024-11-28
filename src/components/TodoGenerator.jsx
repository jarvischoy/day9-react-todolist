import React, { useContext, useState } from "react"
import { TodoContext } from "../context/TodoContext"

const TodoGenerator = () => {
  const [text, setText] = useState("")
  const { dispatch } = useContext(TodoContext)

  const handleInputChange = (e) => {
    setText(e.target.value)
  }

  const handleAdd = () => {
    dispatch({ type: "ADD", payload: { text } })
    setText("")
  }

  return <div>
    <input type="text" value={text} onChange={handleInputChange} />
    <button onClick={handleAdd}>add</button>
  </div >

}

export default TodoGenerator
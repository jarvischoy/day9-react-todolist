import React from "react"
import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"

const TodoItem = (props) => {
  const { id, text } = props

  const { dispatch } = useContext(TodoContext)

  const handleDelete = () => {
    dispatch({ type: "DELETE", payload: { id } })
  }


  return <div >
    {text}
    <button onClick={handleDelete}>x</button>
  </div>
}

export default TodoItem
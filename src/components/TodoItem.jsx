import React from "react"


const TodoItem = (props) => {
  const { text } = props
  return <div>
    {text}
    <button onClick={() => { }}>x</button>
  </div>
}

export default TodoItem
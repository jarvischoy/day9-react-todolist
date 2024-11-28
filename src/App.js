import React from "react"
import "./App.css"
import TodoList from "./components/TodoList"

function App() {
  return (
    <div className="App">
      <TodoContext>
        <TodoList />
      </TodoContext>
    </div>
  )
}

export default App

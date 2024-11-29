import React from "react"
import "./App.css"
import TodoList from "./components/TodoList"
import { TodoProvider } from "./context/TodoContext"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import NotFound from "./components/NotFound"
import RoutesEnum from "./enum/RoutesEnum"

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <Router>
          <Routes>
            <Route path={"/"} element={<Navigate to={RoutesEnum.TODO_LIST} />} />
            <Route path={RoutesEnum.TODO_LIST} element={<TodoList />} />
            <Route path={RoutesEnum.DONE_LIST} element={<TodoList />} />
            <Route path={"*"} element={<NotFound />} />
          </Routes>
        </Router>
      </TodoProvider>
    </div>
  )
}

export default App

import React from "react"
import "./App.css"
import TodoList from "./components/TodoList"
import { TodoProvider } from "./context/TodoContext"
import { BrowserRouter as Router, Route, Routes, Navigate, NavLink } from "react-router-dom"
import NotFound from "./components/NotFound"
import RoutesEnum from "./enum/RoutesEnum"
import DoneList from "./components/DoneList"
import HelpPage from "./components/HelpPage"

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <Router>
          <NavLink to={"/"}>HOME</NavLink> | <NavLink to={RoutesEnum.DONE_LIST}>Done List</NavLink> | <NavLink to={RoutesEnum.HELP}>Help</NavLink>
          <Routes>
            <Route path={"/"} element={<Navigate to={RoutesEnum.TODO_LIST} />} />
            <Route path={RoutesEnum.TODO_LIST} element={<TodoList />} />
            <Route path={RoutesEnum.DONE_LIST} element={<DoneList />} />
            <Route path={RoutesEnum.HELP} element={<HelpPage />} />
            <Route path={"*"} element={<NotFound />} />
          </Routes>
        </Router>
      </TodoProvider>
    </div>
  )
}

export default App

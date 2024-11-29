import client from "./client"

export const getTodos = () => {
  return client.get("/todos")
}

export const addTodos = (todoItem) => {
  return client.post("/todos", todoItem)
}

export const updateTodos = (todoItem) => {
  return client.put(`/todos/${todoItem.id}`, todoItem)
}

export const deleteTodos = (todoItemId) => {
  return client.delete(`/todos/${todoItemId}`)
}

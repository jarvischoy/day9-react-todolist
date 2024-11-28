import { v4 as uuidv4 } from "uuid"

export const initialState = []

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: uuidv4(), text: action.payload.text, done: false }]
    case "TOGGLE":
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, done: !todo.done }
        }
        return todo
      })
    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload.id)
    default:
      return state
  }
}

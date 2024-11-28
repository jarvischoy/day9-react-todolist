import { v4 as uuidv4 } from "uuid"

export const initialState = []

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: uuidv4(), text: action.payload.text, done: false }]
    case "TOGGLE":
      return state
    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload.id)
    default:
      return state
  }
}

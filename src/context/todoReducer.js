import { v4 as uuid } from "uuid"

export const initialState = []

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: uuid(), text: action.payload.text, done: false }]
    case "TOGGLE":
      return state
    case "DELETE":
      return state
    default:
      return state
  }
}

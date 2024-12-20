import { ActionEnum } from "../enum/ActionEnum"

export const initialState = []

export const todoReducer = (state, action) => {
  switch (action.type) {
    case ActionEnum.LOAD:
      return action.payload
    case ActionEnum.ADD:
      return [...state, action.payload]
    case ActionEnum.TOGGLE:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, done: !todo.done }
        }
        return todo
      })
    case ActionEnum.UPDATE:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, text: action.payload.text }
        }
        return todo
      })
    case ActionEnum.DELETE:
      return state.filter((todo) => todo.id !== action.payload.id)
    default:
      return state
  }
}

import axios from "axios"

const client = axios.create({
  baseURL: "https://67495bca868020296630a5b2.mockapi.io/todoList",
})

export default client

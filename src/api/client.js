import axios from "axios"

const client = axios.create({
  baseURL: "https://67495bca868020296630a5b2.mockapi.io/todoList",
})

client.interceptors.request.use(
  (config) => {
    // handle request
    config.metadata = { startTime: new Date() }
    console.log("Request:", config)
    return config
  },
  (error) => {
    // handle request error
    console.error("Request Error:", error)
    return Promise.reject(error)
  }
)

// global response interceptor
client.interceptors.response.use(
  (response) => {
    // handle response
    const duration = new Date() - response.config.metadata.startTime
    response.duration = duration
    console.log(`method: ${response.config.method} url: ${response.config.url} duration: ${response.duration}ms`)
    return response
  },
  (error) => {
    // handle response error
    if (error.response && error.response.status === 404) {
      window.location.href = "/404"
    }

    console.error("Response Error:", error)
    return Promise.reject(error)
  }
)

export default client

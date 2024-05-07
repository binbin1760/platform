import axios from 'axios'

const http = axios.create({
  timeout: 60000,
  baseURL: import.meta.env.VITE_APP_BASE_API,
  withCredentials: false
})

http.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

http.interceptors.response.use(
  (res) => {
    const data = res.data
    return data
  },
  (err) => {
    return Promise.reject(err)
  }
)

export { http as request }

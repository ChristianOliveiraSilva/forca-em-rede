import axios from "axios"

const api = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL
})

api.interceptors.request.use(
    config => {
        const token = localStorage.getItem("token")
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`
        }
        return config
    },
    error => {
        Promise.reject(error)
    }
)

api.interceptors.response.use(function (response) {
    return response
}, function (error) {
    return Promise.reject(error.response)
})


export default api
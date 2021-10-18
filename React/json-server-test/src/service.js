import axios from "axios"

export const getAllUsers = () => {
    return axios.get(`http://localhost:3005/users`)
}

export const postUser = (user) => {
    return axios.post(`http://localhost:3005/users`,user)
}

export const deleteUser = (id) => {
    return axios.delete(`http://localhost:3005/users/${id}`)
}

export const getUserById = (id) => {
    return axios.get(`http://localhost:3005/users/${id}`)
}
import axios from 'axios'

export const getAllUsers = () => axios.get(`http://localhost:3005/users`)
export const postUser = (username,email,password) => axios.post(`http://localhost:3005/users`,{username,email,password})
export const getAllQuotes = () => axios.get(`http://localhost:3005/quotes`)
export const getQuoteById = (id) => axios.get(`http://localhost:3005/quotes/${id}`)
export const addQuote = (text,autor) => axios.post(`http://localhost:3005/quotes`,{text,autor})
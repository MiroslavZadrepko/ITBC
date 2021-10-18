import axios from "axios"

export const getAllMessages = () => axios.get(`http://localhost:3005/messages`)
// export const sendMessage = (username,message,time) => axios.post(`http://localhost:3005/messages`,{username,message,time})
export const sendMessage = (message) => axios.post(`http://localhost:3005/messages`,message)
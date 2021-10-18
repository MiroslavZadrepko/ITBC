import axios from 'axios'

export const getAllContacts = () => axios.get(`http://localhost:3005/contacts`)
export const addContact = (name,phone) => axios.post(`http://localhost:3005/contacts`,{name,phone})
export const deleteContact = (id) => axios.delete(`http://localhost:3005/contacts/${id}`)
export const updateContact = (id,phone) => axios.patch(`http://localhost:3005/contacts/${id}`,{phone})
export const replaceContact = (id,name,phone) => axios.put(`http://localhost:3005/contacts/${id}`,{name,phone})
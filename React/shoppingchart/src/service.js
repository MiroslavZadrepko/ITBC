import axios from 'axios';

export const getAllProducts = () => axios.get(`http://localhost:3005/products`)
export const addProduct = (name, price, info) => axios.post(`http://localhost:3005/products`, {name, price, info})
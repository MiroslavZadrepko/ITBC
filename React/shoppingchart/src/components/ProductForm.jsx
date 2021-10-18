import { useState } from "react"
import { addProduct } from "../service"


const ProductForm = ({ products, setProducts }) => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [info, setInfo] = useState('')

    return (
        <>
            <input type="text" value={name} placeholder="...product name" onChange={(e) => { setName(e.target.value) }} />
            <input type="number" value={price} placeholder="...price" onChange={(e) => { setPrice(e.target.value) }} />
            <input type="text" value={info} placeholder="...info" onChange={(e) => { setInfo(e.target.value) }} />
            <button onClick={() => {
                addProduct(name, price, info).then(res => {
                    setProducts(prev => [...prev, res.data])
                    console.log(name);
                    setName('')
                    setPrice('')
                    setInfo('')
                })
            }}>new product</button>
            
        </>
    );
}
export default ProductForm;
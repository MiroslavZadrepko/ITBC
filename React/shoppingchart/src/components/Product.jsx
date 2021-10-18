import { useState } from "react";
import Info from "./Info";

const Product = ({ product }) => {

    const [quant, setQuant] = useState(0)
    const [show, setShow] = useState(false)
    
    const onClick = () => { show ? setShow(false) : setShow(true) }
        
    return (
        <>
            <p>{product.name}: {product.price} galaktičkih kredita</p>
            <p>Quntity: {quant}</p>
           
            <p>
                <button onClick={() => {setQuant(prev => [Number(prev) + 1]) }}>+</button>
                <button onClick={() => { setQuant(prev => [Number(prev) - 1]) }}>-</button>
            </p>
            
            <button onClick={() => { onClick() }}>info</button>
            {show ? <Info product={product} /> : null}

            <hr />
        </>
    );
}

export default Product;
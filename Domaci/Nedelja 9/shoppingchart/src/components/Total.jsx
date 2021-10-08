import { useState } from "react";


const Total = () => {
    
    const [racun, setRacun] = useState(0)
    const [tax, setTax] = useState(0)
    const [totalRacun, setTotalRacun] = useState(0)

    return (
        <>
            <p>Price: {racun}</p>
            <p>Tax: {tax}</p>
            <p>Price incl Tax: {totalRacun}</p>
        </>
    )
}

export default Total;
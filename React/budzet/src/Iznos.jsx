import React, { useState } from "react"

function Iznos() {
    const [iznos, setIznos] = useState(`0`)
    return (
        <>
            <label htmlFor="iznos">Iznos transakcije </label>
            <input type="number" name="iznos" value={iznos} onChange={(el) => {
               setIznos(el.target.value) 
            }} /><br></br>
        </>
    )
}
export default Iznos
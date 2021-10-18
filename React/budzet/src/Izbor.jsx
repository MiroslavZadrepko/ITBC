import React, { useState } from "react"

function Izbor() {
    const [izbor, setIzbor] = useState(``)
    return (
        <>
            <label htmlFor="izbor">izbor transakcije </label>
            <select name="izbor" onChange={(el) => {
                if (izbor === `-1`) {
                    console.log(`greška`);//pozvati grešku
                } else { setIzbor(el.target.value) }
            }}>

                <option value="-1"></option>
                <option value="prihod" >Prihod</option>
                <option value="rashod">Rashod</option>

            </select><br></br>
        </>
    )
}
export default Izbor

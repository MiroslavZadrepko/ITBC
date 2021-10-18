import React, { useState } from "react"

function Opis() {
    const [opis, setOpis] = useState(``)
    return (
        <>
            <label htmlFor="opis">Opis transakcije    </label>
            <input type="text" name="opis" value={opis} onChange ={(el) => { 
                if(opis == ` `) {console.log(`greška`) ; //pozvati grešku
            } else {setOpis(el.target.value)}
                
              
            }} /><br></br>
        </>
    )
}
export default Opis

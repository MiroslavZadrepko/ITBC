import React, { useState } from "react";
//ovo se kod Anđele zove Forma

const Inputi = ({ setPrihodi, setRashodi }) => {
    const [tip, setTip] = useState('-1')
    const [opis, setOpis] = useState(' ')
    const [vrednost, setVrednost] = useState('')
    return (
        <>
            <form onSubmit...>
                <select defaultValue={'-1'} onChange={
                    (e)=>{setTip(e.target.value)}
                }>
                    <option value="-1" disabled hidden>Prihod ili rashod?</option>
                    <option value="+">Prihod</option>
                    <option value="-">Rashod</option>
                </select>
                <input onChange={(e)=>{setOpis(e.target.value)}} placeholder = '...opis'/>
                <input onChange={(e)=>{setVrednost(e.target.value)}} placeholder = '...vrednost' />
                <input type="submit" value="dodaj1"/>

            </form>
        </>
    )
}
export default Inputi
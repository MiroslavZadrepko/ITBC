import React, { useState } from "react";

const Stanje = ({prihodi, rashodi}) => {
    	let ukupnoPrihoda = prihodi.reduce((total, el)=>{total + el.value}, 0)
        let ukupnoRashoda = rashodi.reduce((total, el)=>{total + el.value}, 0)
    return(
        <>
        <h2>Raspoloživo stanje: </h2><br/> {ukupnoPrihoda - ukupnoRashoda}
        <p>Prihodi: {ukupnoPrihoda}</p>
        <p>Rashodi: {ukupnoRashoda}</p> <p>{Math.round(ukupnoRashoda/ukupnoPrihoda)*100}</p>
        </>
    )
}
export default Stanje



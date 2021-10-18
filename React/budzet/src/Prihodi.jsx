import React, { useState } from "react";
import {prihodi} from "./Inputi"

function Prihodi (prihodi) {

    return(
        <>
        {console.log(prihodi)}
        <p>Prihod: {prihodi.iznos} Iznos: {prihodi.opis}</p>
        </>
    )

}
export default Prihodi
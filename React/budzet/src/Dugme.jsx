import React, { useState } from "react";
import izbor from "./Izbor";
import opis from "./Opis";
import iznos from "./Iznos";
import { v4 as uuidv4 } from 'uuid';

function Dugme() {

    class Unos {
        constructor(id, izbor, opis, iznos) {
            this.id = id;
            this.izbor = izbor;
            this.opis = opis;
            this.iznos = iznos
        }
    }

    return (
        <>
            <button type="button" onClick={() => {

                let tmp = new Unos(uuidv4(), izbor, opis, iznos)
                console.log(tmp);

                if (tmp.izbor == `prihod`) {
                    console.log(`prihod`);
                } else {
                    console.log(`rashod`);
                }
            }}
            >Sačuvaj</button>
        </>
    )
}
export default Dugme
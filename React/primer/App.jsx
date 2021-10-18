//import Content from "./components/Content"
import Header from "./components/Header"
import React, { useState } from 'react';

const App = () => {
    const [stanje,setStanje] = useState(1)
    const [niz,setNiz] = useState(['gfhg','dgfg'])

    console.log(stanje,niz);

    // let n = [{x:5},{x:7}]
    // let kopija = [...n]
    // kopija.push({x:9})
    // setN(kopija)

  
    return(
        <>
        <Header naslov='Naslov'/>
        <p>{stanje}</p>
        <p>{stanje}</p>
        <p>{stanje}</p>
        <p>{niz}</p>
        <p>{niz}</p>
        <button onClick = {()=>{ 
            setStanje(stanje + 1) //stanje++ -> stanje = stanje +1 NE SME
            // let kopija = [...niz]
            // kopija.push(stanje)
            setNiz([...niz,stanje]) 
             }}>Uvecaj</button>
        </>
    )
}


export default App
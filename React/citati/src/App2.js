import { useState } from "react"

const App2 = ({citati:data}) =>{
    const [selected, setSelected] = useState(0) // Селектован је нулти цитат
    const [citati, setCitati] = useState(data.map(citat => {
        return {
           // id: Math.random(),
            text: citat,
            votes: 0
        }
    })) 

    // function maxIndex(){
    //     let max = 0
    //     let indeks = 0
    //     citati.forEach((citat,i) => {
    //         if(citat.votes > max){
    //             max = citat.votes
    //             indeks = i
    //         }
    //     });
    //     return indeks
    // }

    const maxCitat = citati.reduce((max, citat) => (citat.votes > max.votes ? citat : max), citati[0]);
 
    // let glasovi = citati.map(citat => citat.votes)
    // let maxIndex = glasovi.indexOf( Math.max(...glasovi))
 

    return (
        <div>
            <h2>Citat:</h2>
            <p>{citati[selected].text}</p>
            <p>Glasova: {citati[selected].votes}</p>
            <button onClick={
                ()=>{
                    setSelected((selected + 1)%citati.length)
                }
            }>Sledeci</button>
            <button onClick={()=>{
                let kopija = [...citati]
                kopija[selected] ={...kopija[selected]}  //new Object(kopija[selected])
                kopija[selected].votes++
                setCitati(kopija)
            }}>Glasaj</button>
            <h2>Najbolji citat:</h2>
            <p>{maxCitat.text}</p>
            <p>{maxCitat.votes}</p>
        </div>
    )
} 

export default App2
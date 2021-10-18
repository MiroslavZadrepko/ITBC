import React, {useState} from "react";
import Stanje from "./Stanje";
import Inputi from "./Inputi"

function App() {

  const [prihodi, setPrihodi] = useState([])
  const [rashodi, setRashodi] = useState([])

  return (
    <>
      <div>
        <Stanje prihodi={prihodi} rashodi= {rashodi}/> {/* Ovo sa prosleđivanjem podataka je jako važno, upamti!!! */}
        <Inputi setPrihodi={setPrihodi} setRashodi={setRashodi}/>
        <Transakcija transakcije = {prihodi} setTransakcije= {setPrihodi} prihod={true}/>{/*prihod se šalje kao provera, da bi znali da li je ova transakcija ili rashodna */}
        <Transakcija transakcije = {rashodi} setTransakcije= {setRashodi}/>
      </div>

    </>
  );
}

export default App;

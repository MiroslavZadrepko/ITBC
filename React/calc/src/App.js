import React, { useState } from "react";
import Racun from "./Racun";

function App() {

  const [broj, setBroj] = useState(0);
  const [rezultat, setRezultat] = useState(0)
  const [nizBrojevaiOperacija, setnizBrojevaiOperacija] = useState([])

  return (
    <div>
      <input defaultValue="" placeholder={rezultat} />
      <input type="number" placeholder="Unesite broj"
        onChange={(e) => {
          e.preventDefault()
          setBroj(e.target.value)
        }}
      />

      <button onClick={() => { let plus = '+'; Racun(rezultat, setRezultat, broj, plus, nizBrojevaiOperacija, setnizBrojevaiOperacija) }}>+</button>

      <button onClick={() => { let minus = '-'; Racun(rezultat, setRezultat, broj, minus, nizBrojevaiOperacija, setnizBrojevaiOperacija) }}>-</button>

      <button onClick={() => { let puta = '*'; Racun(rezultat, setRezultat, broj, puta, nizBrojevaiOperacija, setnizBrojevaiOperacija) }}>*</button>

      <button onClick={() => { let deljenje = '/'; Racun(rezultat, setRezultat, broj, deljenje, nizBrojevaiOperacija, setnizBrojevaiOperacija) }}>/</button>

      <button onClick={() => {
        setBroj(0)
        setRezultat(0)
        setnizBrojevaiOperacija([])
      }}>clr</button>

      <p>{nizBrojevaiOperacija}</p>
    </div>
  );
}
export default App;

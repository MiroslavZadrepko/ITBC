import { useEffect, useState } from "react";
import Countries from "./components/Countries";
import { getAllCountries } from "./service";


function App() {
  
  const [inputTxt, setInputTxt] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(()=>{
    getAllCountries().then( res=> {
       setCountries(res.data);
       
    }
    )
  },[])

  return (
    <div>
      <p>Hello from App</p>
      <input onChange={(e) => {
        setInputTxt(e.target.value)
        
      }}/>
      <p>{inputTxt}</p>
      <Countries countries={countries}/>
    </div>
  );
}

export default App;

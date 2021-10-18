import React, { useEffect, useState } from 'react';
import Countries from './components/Countries';
import { getAllCountries } from './service';


function App() {
    const [inputSearch,setInputSearch]  = useState('')
    const [countries,setCountries] = useState([])
  //  const [filtrirane,setFiltrirane] = useState([])
  let filtrirane = countries.filter(country => country.name.common.toLowerCase().includes(inputSearch.toLowerCase()))

  
    useEffect(()=>{
      getAllCountries().then(res => {
        setCountries(res.data)
      })
    },[])
  return (
    <div>
      <input onChange = {(e)=>{
         setInputSearch(e.target.value)
      }}/>
      { filtrirane.length <= 10 ?
       <Countries countries={filtrirane}/>
       : ( inputSearch !== '' ?
          <p>Budite specificniji</p>
          :
          <p>Krenite da kucate</p> )
      }
      
    </div>
  );
}

export default App;

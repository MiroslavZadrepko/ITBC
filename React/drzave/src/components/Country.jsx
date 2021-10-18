import { useEffect, useState } from "react";

const Country = ({country,single}) => {
    const [more,setMore] = useState(single)
    
    useEffect(()=>{
        setMore(single)
    },[single])

    return more ? 
        (<div>
            <p>{country.name.common}</p>
            <p>{country.capital}</p>
            <p>{country.population}</p>
            <img src={country.flags.png} alt={`Flag of ${country.name.common}`} style={{width:'150px'}} />
        </div>)
     :
        ( <div>
            <p>{country.name.common}</p>
            <button onClick ={()=>{
                setMore(true)
            }}>Prikazi</button>
            {/* <details>
                <summary>Pokazi</summary>
                <p>{country.capital}</p>
                <p>{country.population}</p>
                <img src={country.flags.png} alt={`Flag of ${country.name.common}`} style={{width:'150px'}} />
            </details> */}
        </div>)
}
 
export default Country;
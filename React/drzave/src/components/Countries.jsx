import { useEffect, useState } from "react";
import Country from "./Country";

const Countries = ({countries}) => {
    // const [single,setSingle] = useState(countries.length === 1)
    
    // useEffect(()=>{
    //     setSingle(countries.length === 1)
    // },[countries])

    return ( 
        <>
         {countries.map(country => <Country key={country.name.common} country={country} single = {countries.length === 1}/>)}
        </>
     );
}
 
export default Countries;
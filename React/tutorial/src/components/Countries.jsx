
import Country from "./Country";

const Countries = ({countries}) => {

    return ( 
        <>
         {countries.map(country => <Country key={country.name.common} country={country} />)}
        </>
     );
}
 
export default Countries;
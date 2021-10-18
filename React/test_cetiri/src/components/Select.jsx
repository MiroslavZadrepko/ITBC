const Select = ({options,displayed,setDisplayed}) => {

    return ( 
        <select value={displayed} onChange={(e)=>{
            setDisplayed(e.target.value)
        }}>
            {[...(new Set(options))].map(option => <option key={option} value={option}>{option}</option>)}
        </select>
     );
}
 
export default Select;
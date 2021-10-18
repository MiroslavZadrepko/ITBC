import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { getAllQuotes } from "../service";


const Quotes = ({loggedIn}) => {
    const [quotes,setQuotes] = useState([])

    useEffect(()=>{
        let mounted = true

        if(!loggedIn) return
        getAllQuotes().then(res => {
            if(mounted)
            setQuotes(res.data)
        })

        return ()=> {mounted = false}
    },[])

    return loggedIn ? 
    <div>
        {quotes.map(quote => <div key={quote.id}><Link to={`/quotes/${quote.id}`}>{quote.text}</Link></div>)}
    </div> 
    :
    <Redirect to="/login"/>
    
}
 
export default Quotes;
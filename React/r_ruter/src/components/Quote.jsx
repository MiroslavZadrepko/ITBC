import { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router";
import { getQuoteById } from "../service";

const Quote = ({loggedIn}) => {
    let {id} = useParams()
    const [quote,setQuote] = useState(null)

    useEffect(()=>{
        let mounted = true

        if(!loggedIn) return
        getQuoteById(id).then(res => {
            if(mounted)
            setQuote(res.data)
        })

        return ()=> {mounted = false}
    },[])
    return loggedIn ? 
        <div>
            <p>{quote?.text}</p>
            <p>{quote?.autor}</p>
        </div>
     :
     <Redirect to="/login"/>
}
 
export default Quote;
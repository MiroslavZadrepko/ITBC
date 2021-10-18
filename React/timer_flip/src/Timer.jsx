import { useEffect, useState } from "react";

const Timer = () => {
    const [seconds,setSeconds] = useState(0)
    const [stop , setStop] = useState(false)
    const [showTimer,setShowTimer] = useState(true)

    useEffect(()=>{
        let timer =  setInterval(()=>{
            setSeconds(s => s + 1)
        },1000)

        if(stop) clearInterval(timer)

        return ()=>clearInterval(timer)
    },[stop])

    //componentDidMount()
    //componentWillUpdate()
    //componentDidUpdate()
    //componentDidUnmount()

    // componentDidMount(){
    //     let timer =  setInterval(()=>{
    //         setSeconds(prev => prev + 1)
    //     },1000)

    //     if(stop) clearInterval(timer)
    // }
    // componentWillUpdate(){
    //     clearInterval(timer)
    // }
    // componentDidUpdate(){
    //     let timer =  setInterval(()=>{
    //         setSeconds(prev => prev + 1)
    //     },1000)

    //     if(stop) clearInterval(timer)
    // }
    // componentDidUnmount(){
    //     clearInterval(timer)
    // }
    
    return ( 
    <div>
        {showTimer?
        <div>
        <p>{seconds}</p>
        <button onClick={()=>{setSeconds(0)}}>Reset</button>
        <button onClick={()=>{setStop(prev => !prev)}}>Stop/Start</button>   
        </div> 
        :
        <p>No timer for you</p>
        }
        <button onClick={()=>{setShowTimer(prev => !prev)}}>Switch</button>
    </div>
     )
    
}
 
export default Timer;
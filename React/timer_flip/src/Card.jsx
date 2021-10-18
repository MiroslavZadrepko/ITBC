import { useState } from "react";
import StyledCard from "./StyledCard";

const Card = ({Front, Back, autoRotate}) => {
    const [front,setFront] = useState(true)
    const [transform,setTranform] = useState('')
    const [isRotating,setIsRotating] = useState(false)

    const rotate = () => {
        if(autoRotate && !isRotating){
            setFront(p => !p)
            setTranform(p => p ?'':'change')
            setIsRotating(true)

            setTimeout(()=>{
                setFront(p => !p)
                setTranform(p => p ?'':'change')
                setIsRotating(false)
            },2000)

        }
        if(!autoRotate){
            setFront(p => !p)
            setTranform(p => p ?'':'change')
        }
    }

    return ( 
        <StyledCard className={transform} onClick={rotate}>
            {front ? <Front/> : <Back/>}
        </StyledCard>
     );
}
 
export default Card;
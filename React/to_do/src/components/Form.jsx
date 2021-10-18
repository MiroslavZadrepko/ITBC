import { useState } from "react"
import {v1 as uuidv1} from "uuid"

const Form = ({setTodos}) => {
    const [inputTxt,setInputTxt] = useState('')

    return ( 
    <>
        <input value={inputTxt} onChange={(e)=>{
            setInputTxt(e.target.value)
        }}/>
        <button onClick={()=>{
            // setTodos([...todos,{
            //     id:uuidv1(),
            //     text: inputTxt,
            //     done: false
            // }])

            setTodos((prev)=> [...prev,{
                id:uuidv1(),
                text: inputTxt,
                done: false
            }])

            setInputTxt('')
        }}>Dodaj todo</button>
    </> 
    );
}
 
export default Form;
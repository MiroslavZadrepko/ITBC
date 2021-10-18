import { useState } from "react";
import { sendMessage } from "../service";
import { isMessageEmpty, isUsernameEmpty, isValidUsername } from "../validation";
import StyledInput from "./StyledInput";

const Form = ({ setMessages }) => {
    const [username, setUsername] = useState('')
    const [inputUsername, setInputUsername] = useState('')
    const [messageText, setMessageText] = useState('')
    //const [error,setError] = useState('')
    const [errors,setErrors] = useState([false,false,false]) //false - nema greske
    let errorMessages = ['username mora da sadrzi minimum tri karaktera!','morate se ulogovati!','poruka ne sme biti prazna!']

    return (
        <div>
            <StyledInput error = {errors[0]} type="text" placeholder="username..." onChange={(e) => {
                setInputUsername(e.target.value)
            }} />
            <p>{errors[0]?errorMessages[0]:''}</p>

            <button onClick={() => {
                if (!isValidUsername(inputUsername)) {
                    //setError('username mora da sadrzi minimum tri karaktera!')
                    setErrors(prev => prev.map((err,i) => i === 0 ? true : err ) )
                    return
                }
                //setError('')
                setErrors(prev => prev.map((err,i) => i !== 2 ? false : err ) )
                setUsername(inputUsername)
            }}>LogIn</button>

            <p>Ulogovani korisnik: {username}</p>

            <textarea onChange={(e) => { setMessageText(e.target.value) }} placeholder="message text..." cols="30" rows="10"></textarea><br />
            <p>{errors[1] ? errorMessages[1] : ''}</p>
            <p>{errors[2] ? errorMessages[2] : ''}</p>

            <button onClick={() => {
                if(!isUsernameEmpty(username)){
                    setErrors(prev => prev.map((err,i) => i === 1 ? true : err ) )
                    return
                }
                
                if(!isMessageEmpty(messageText)){
                    setErrors(prev => prev.map((err,i) => i === 2 ? true : err ) )
                    return
                }
                setErrors(prev => prev.map((err,i) => i === 2 ? false : err ) )

                let date = new Date()
                let newMessage = {
                    username,
                    message: messageText,
                    time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
                }

                sendMessage(newMessage).then(res => {
                    setMessages(prev => [...prev, res.data])
                })
            }}>Send message</button>
        </div>
    );
}

export default Form;
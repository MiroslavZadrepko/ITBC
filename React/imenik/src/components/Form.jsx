import {  useState } from "react";
import { addContact, updateContact } from "../service";

const Form = ({setContacts,contacts,setInputSearch}) => {
    const [error,setError] = useState('')
    // * Ако је било које поље празно, исписује се грешка (испод форме, не користити alert)
    // * Поље са бројем телефона има 12 караткера (не рачунајући +) (Пример: +381601234567)
    // * Поље са бројем телефона мора почети са знаком + (у супротном исписати поруку кориснику да телефон мора бити унет у формату +xxx xxxxxxxxx)
    const isValid = (name,phone) => name.trim() !== '' &&
                                    phone.trim() !== '' &&
                                    phone.length === 13 &&
                                    phone.startsWith('+') &&
                                    !isNaN(Number(phone))


    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    return ( 
        <>
            <input type="text" value={name} placeholder="...name" onChange={(e)=>{setName(e.target.value)}}/>
            <input type="text" value={phone} placeholder="...phone" onChange={(e)=>{setPhone(e.target.value)}}/>
            <button onClick={
                ()=>{
                    if(!isValid(name,phone)){
                        setError('GRESKA!')
                        return
                    }
                    setError('')
                    setInputSearch('')
                    setName('')
                    setPhone('')
                    let maybeContact = contacts.find(contact => contact.name  === name)
                    if(maybeContact){
                        if(window.confirm('Da li zelite da zamenite broj?')){
                            setContacts(prev => prev.map(contact => contact.id === maybeContact.id ? {...contact,phone} : contact))
                            updateContact(maybeContact.id,phone)
                        }
                    }else{
                        addContact(name,phone).then(res => {
                            setContacts(prev => [...prev,res.data])
                        })
                    }
                }
            }>Submit</button>
            {error}
        </>
     );
}
 
export default Form;
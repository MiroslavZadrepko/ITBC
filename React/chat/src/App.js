import { useEffect, useState } from "react";
import Form from "./components/Form";
import Messages from "./components/Messages";
import { getAllMessages } from "./service";


function App() {
  const [messages, setMessages] = useState([])

  useEffect(()=>{
    getAllMessages().then(res => {
      setMessages(res.data)
    })  
  },[])


  useEffect(()=>{
     let t = setInterval(()=>{
      getAllMessages().then(res => {
        setMessages(res.data)
      })  
    },3000)

    return ()=> clearInterval(t)
  },[])
 
  return (
    <div className="chat">
      <Form setMessages={setMessages} />
      <Messages messages={messages} />
    </div>
  );
}

export default App;

import React, { useState,useEffect } from 'react';
import Form from "./components/Form.jsx"
import Contacts from "./components/Contacts.jsx"
import {getAllContacts} from "./service.js"
import Search from "./components/Search.jsx"


function App() {
  const [contacts,setContacts] = useState([])
  const [inputSearch,setInputSearch] = useState('')

  useEffect(()=>{
    getAllContacts().then(res => {
      setContacts(res.data)
    })
  },[])

  return (
    <div className="App">
      <Form setContacts={setContacts} contacts={contacts} setInputSearch = {setInputSearch}/>
      <Search setInputSearch = {setInputSearch} inputSearch={inputSearch}/>
      <Contacts contacts={contacts.filter(contact => contact.name.includes(inputSearch)) }/>
    </div>
  );
}

export default App;

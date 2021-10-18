import { deleteUser, getAllUsers, getUserById, postUser } from "./service";
import React, { useEffect } from 'react';
import { useState } from "react"
import Users from "./components/Users";

function App() {
  const [users, setUsers] = useState([])
 // const [prikazani,setPrikazani] = useState([])
  const [show, setShow] = useState(true)
  const [choosenId ,setChoosenId] = useState('-1')


  useEffect(() => {
    getAllUsers().then(res => {
      setUsers(res.data)
      //setPrikazani(res.data)
    })
  }, [])

  return (
    <div>
      <button onClick={() => {
        setShow(!show)
      }}>show/hide</button>

      <button onClick={()=>{
        //setPrikazani(users)
        getAllUsers().then(res => {
          setUsers(res.data)
        })
      }}>All users</button>

      <select defaultValue='-1' onChange={(e)=>{
        setChoosenId(e.target.value)
      }}>
        <option value="-1" disabled hidden>Izaberi korisnika</option>
        {users.map(user => <option key={user.id} value={user.id}>{user.first_name}</option>)}
      </select>

      <button onClick={()=>{
        getUserById(choosenId).then(res => {
          setUsers([res.data])
          //setPrikazani([res.data])
        })
      }}>GET ONE USER</button>

      <button onClick={()=>{
        let newUser = {
          first_name: 'pera' +Math.round(Math.random()*100) 
        }
        postUser(newUser).then(res => {
          // getAllUsers().then(res=>{
          //   setUsers(res.data)
          // })
          //setUsers([...users,res.data])
          setUsers(prev => [...prev,res.data])
        })
      }}>POST USER</button>

      <button onClick={()=>{
         deleteUser(choosenId).then(()=>{
          //  getAllUsers().then(res => {
          //    setUsers(res.data)
          //  })

          // setUsers(prev => {
          //     let kopija = [...prev]
          //     let indeks = kopija.findIndex(el => el.id === id)
          //     kopija.splice(indeks,1)
          //     return kopija
          // })

          setUsers(prev => prev.filter(el => el.id !== choosenId))
         })

      }}>DELETE USER</button>
 
      <div>{show ? <Users users = {users}/> : ''}</div>

    </div>
  );
}

export default App;
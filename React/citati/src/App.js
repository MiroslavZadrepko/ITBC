import React, { useState } from 'react'


function App({citati}) {
  const [selected, setSelected] = useState(0) // Селектован је нулти цитат
  const [votes, setVotes] = useState(new Array(citati.length).fill(0)) 
  // const next = () => {
  //   if(selected == citati.length - 1){
  //     setSelected(0)
  //   }else{
  //     setSelected(selected + 1)
  //   }
  // }

  let maxIndex = votes.indexOf(Math.max(...votes)) 

  return (
    <div>
      <p>{citati[selected]}</p>  {/* Приказујемо селектован цитат */}
      <p>{votes[selected]}</p>

      <button onClick={()=>{
        setSelected((selected + 1) % citati.length)
      }}>Sledeci</button>

      <button onClick={
        ()=>{
          let copyVotes = [...votes]
          copyVotes[selected]++ //0+1
          setVotes(copyVotes)
        }
      }>Glasaj</button>

      {
        maxIndex == 0 && votes[maxIndex] == 0
        ?
        <p>Nema jos glasova</p>
        :
        <div>
          <h2>Najbolji citat: </h2>
          <p>{citati[maxIndex]}</p>
          <p>{votes[maxIndex]}</p>
        </div>
      }

    </div>
  )
}

export default App;

import React from 'react'
import Content from './components/Content'
import Header from './components/Header'
import Ukupno from './components/Ukupno'

const App = () => {
  const pab = {
    ime: 'Jolly',
    osobe: [
      {
        ime: 'Пера',
        pice: 5
      },
      {
        ime: 'Ана',
        pice: 7
      },
      {
        ime: 'Жика',
        pice: 13
      },
      {
        ime: 'Mika',
        pice: 23
      }
    ]
  }

  return (
    <div>
      <Header pab = {pab.ime}/>
      <Content osobe = {pab.osobe}/>
      <Ukupno pica= {pab.osobe.map(osoba => osoba.pice)}/>
    </div>
  )
}

export default App;

import React, { useState } from 'react'
import ReactDOM, { render } from 'react-dom';

const App = () => {
  const [pozitivni, setPozitivni] = useState(0)
  const [negativni, setNegativni] = useState(0)
  const [neutralni, setNeutralni] = useState(0)
  const [sveOcene, setSveOcene] = useState(0)

  let procenat = Math.round((pozitivni / sveOcene) * 100)
  if (isNaN(procenat)) procenat = 0

  return (
    <>
      <div>
        <button onClick={() => { setPozitivni(pozitivni + 1); setSveOcene(sveOcene + 1); }}>Pozitivno</button>
        <p>Pozitivnih ocena {pozitivni}</p>

        <button onClick={() => { setNegativni(negativni + 1); setSveOcene(sveOcene + 1); }}>Negativno</button>
        <p>Negativnih ocena {negativni}</p>

        <button onClick={() => { setNeutralni(neutralni + 1); setSveOcene(sveOcene + 1); }}>Neutralno</button>
        <p>Neutralnih ocena {neutralni}</p>

        <p>Ukupan broj ocena {sveOcene}</p>

        <p>Procenat pozitivnih ocena: {procenat} %</p>
      </div>
    </>
  )

}

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/*<Funkc /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

//npx create-react-app naziv-aplikacije
//cd naziv
//brisanje svega iz src osim index.js  i gore ostaje samo React i ReactDOM
//npm start

//JSX Sintaxa: 
//rad preko klasa:
// class App extends React.Component {
//   render() {
//     return <p>Hello from class</p>;
//   }
// }

// //rad preko funkcija:
// const Funkc = () => {
//   return ( //vraća samo jedan element, dakle ako treba više elemenata onda moraju biti upakovani u jedan veći element, div npr. drugi način je <> ovde sve što treba </>
//     <p>Hello from function</p>
//   )
// }




// const Content = ({ x }) => {
//   console.log('Content x: ', x);
//   return (
//     <div>
//       <p>{x}</p>
//       <button onClick={() => {
//         x++
//         //console.log(x)

//         ReactDOM.render(
//           <React.StrictMode>
//             <App x={x} />
//           </React.StrictMode>,
//           document.getElementById('root')
//         );

//       }} >Uvecaj</button>
//     </div>

//   )
// }

// const Header = ({ naslov }) => {
//   console.log(naslov);
//   return (
//     <h1>{naslov}</h1>
//   )
// }

// const App = ({ x }) => {
//   // let [x,y] = [1,2,3,4]

//   console.log('App x: ', x)
//   // console.log(x,y);
//   //   console.log(ime);
//   // let ime = props.nesto2
//   // let {nesto2,prezime} = props

//   return (
//     <>
//       <Header naslov={'Neki naslov'} />

//       <button onClick={() => { console.log('klik') }}>Klikni me</button>

//       <Content x={x} />
//     </>
//   )
// }






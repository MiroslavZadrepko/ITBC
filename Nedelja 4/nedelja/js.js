
let btn = document.createElement(`button`)
btn.textContent = `Dodavanje reda`

document.getElementById('div1').appendChild(btn)

btn.addEventListener(`click`, (event) => {
    event.preventDefault()
    let red = document.createElement(`tr`)
    red.innerHTML = `
        <td>nešto</td>
        <td>nešto</td>
        <td>nešto</td>`
    document.querySelector(`table`).appendChild(red)
})

//  * 2. Napisati funkciju koja na klik dugmeta vrsi sabiranje 2 broja iz input polja i zbir ispisati na ekranu. HTML kreirati proizvoljno.

let rezultat = 0
document.getElementById('sracunaj').addEventListener(`click`, (input1, input2) => {
    
    let prviBroj = Number(document.getElementById(`prviBroj`).value)
    let drugiBroj = Number(document.getElementById(`drugiBroj`).value)
    //
    rezultat = prviBroj + drugiBroj
  
    document.getElementById('ispis').innerHTML = `Rezultat je ${rezultat}`
})

// 3. Nadovezivanje na predhodni zadatak. Dodati checkbox polje koje kada je selektovano prikazuje se kalkulator a obrnuto se skloni sa ekrana.


document.getElementById(`brisac`).addEventListener(`click`, () => {
    let digitron = document.getElementById(`div2`)
    if (digitron.style.display === `none`) {
      digitron.style.display = `block`
      document.getElementById(`tekst`).innerHTML = `Brisanje digitrona`
    } else {
      digitron.style.display = `none`
      document.getElementById(`tekst`).innerHTML = `Vracanje digitrona`
    }
})







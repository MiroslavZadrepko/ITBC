// Aplikacija TO-DO lista
// Zavrsiti sa casa (26.08.2021) zapocetu aplikaziju za to-do listu koja treba da poseduje sledece funkcionalnosti:
// 1. Podaci iz niza se prikazuju na stranici (lista to-do itema)
// 2. Ima formu/input za unos novih podataka (to-do itema) u niz (automatski se azurira i prikaz na stranici)
// 3. Svaki item sadrzi sledece :
//      - id
//      - opis (desc)
//      - iformaciju da li je uradjen ili ne (done)
// 4. Na stranici za svaki item se prikazuje text - opis i checkbox polje koje menja stanje itema (uradjeno-neuradjeno), 
// kao i dugme za brisanje itema. Kada je item uradjen (done == true) tekst (desc) itema se precrta (ili se na neki drugi nacin naznaci da je item uradjen).


import {
    data,
    add,
    deleteById,
    changeById
} from "./service.js"

const inputTxt = document.querySelector('#input-text')
const forma = document.querySelector('#forma')
const divLista = document.querySelector('#lista')

let count = 5
let item

forma.addEventListener('submit', (event) => {
    event.preventDefault()

    item = { id: count++, desc: inputTxt.value, done: false }
    add(item)

    const divItem = document.createElement('div')
    divItem.classList.add('item')

    const pText = document.createElement('p')
    pText.textContent = inputTxt.value
    pText.style.display = "inline-block"

    let doneChk = document.createElement(`input`)
    doneChk.type = `checkbox`
    doneChk.id = `dugme`

    doneChk.addEventListener(`click`, () => {
        if (doneChk.checked) {
            item.done = true
            pText.style.color = `lightgrey`
        } else {
            item.done = false
            pText.style.color = `black`
        }
    })

    let labelaZaDoneChk = document.createElement(`label`)
    labelaZaDoneChk.setAttribute(`for`, `dugme`)
    labelaZaDoneChk.innerText = `Da li je zadatak urađen?`

    const btnDel = document.createElement('button')
    btnDel.textContent = 'X'
    btnDel.style.display = `inline-block`

    btnDel.addEventListener('click', () => {
        divItem.remove()

        let index = data.findIndex(todo => data.id == item.id)
        data.splice(index, 1)

    })

    let brejk = document.createElement(`br`)

    divItem.append(btnDel, pText, brejk, labelaZaDoneChk, doneChk)
    divLista.append(divItem)

    inputTxt.value = ''
})

let deskr = document.createElement(`p`)
let gotovo = document.createElement(`p`)

for (let i = 0; i < data.length; i++) {

    deskr = data[i].desc
    gotovo = data[i].done

    if (gotovo == true) {
        gotovo = ` Urađeno`

    } else {
        gotovo = ` Nije urađeno`
    }

    const btnDel = document.createElement('button')
    btnDel.textContent = 'X'
    btnDel.style.display = `inline-block`

    btnDel.addEventListener('click', () => {
        divZaData.remove()

        let index = data.findIndex(todo => data.id == item.id)
        data.splice(index, 1)
    })

    let divZaData = document.createElement(`div`)
    divLista.append(divZaData)
    divZaData.append(btnDel, deskr, gotovo)
}





// ## Апликација за приказ информација о државама

// https://restcountries.eu/

// 1. Приказују се све државе (основне информације)
//     - Застава
//     - Име државе
// 2. Постоји Select за бирање региона
// 3. Постоји Input за претрагу држава
// 4. Ако је на страници само једна држава, приказати додатне информације о њој
//     - Застава
//     - Име државе
//     - Име државе на матерњем језику
//     - Популација
//     - Главни град
//     - Интернет домен

// Додатно:
// 5. На страници се приказује највише 7 држава
//     - За остале се праве додатне странице (испод приказа)

import Countries from "./components/Countries.js";
import Country from "./components/Country.js";
import { getAllCountries } from "./service.js";
import inputFilter from "./components/consts.js"

let countries = []

getAllCountries().then(res => {
    countries = res.data
    ispis(countries)
    document.querySelector(`#select`).append(Select(new Set(countries.map(country => country.region)), countries))
    return countries
})

let filtriraneZemlje = []
let inputFilterZemlje = []

const Select = (options, countries) => {
    const select = document.createElement(`select`)

    const defOption = document.createElement(`option`)
    defOption.value = `-1`
    defOption.disabled = true
    defOption.selected = true
    defOption.textContent = `Izaberite region`

    select.append(defOption)

    options.forEach(option => { //ne sme biti isti naziv kao deklarisana const, u ovom slucaju optn
        const optn = document.createElement(`option`)
        optn.value = option
        optn.textContent = option ? option : `Other`
        select.append(optn)
    })

    select.addEventListener(`change`, () => {
        filtriraneZemlje = countries.filter(obj => obj.region == select.value)
        ispis(filtriraneZemlje)

        if (select.value != `-1`) {
            inputFilter.addEventListener(`input`, () => {
                inputFilterZemlje = filtriraneZemlje.filter(obj => obj.name.toLowerCase().includes(inputFilter.value.toLowerCase()))
                ispis(inputFilterZemlje)

            })
        }
    })

    return select
}

inputFilter.addEventListener(`input`, () => {
    inputFilterZemlje = countries.filter(obj => obj.name.toLowerCase().includes(inputFilter.value.toLowerCase()))
    ispis(inputFilterZemlje)

})

function ispis(params) {

    if (params.length == 1) {

        document.querySelector('main').innerHTML = ``

        console.log(params);  

        let zastava = document.createElement('img')

        console.log(params.flag);

        zastava.src = params.flag
        zastava.alt = `Flag of ${params.name}`

        let ime = document.createElement('p')
        ime.textContent = params.name

        let maternjeIme = document.createElement('p')
        maternjeIme.textContent = params.nativeName

        let populacija = document.createElement('p')
        populacija.textContent = params.population

        let glavniGrad = document.createElement('p')
        glavniGrad.textContent = params.capital

        let domen = document.createElement('p')
        domen.innerText = params.topLevelDomain

        document.querySelector('main').append(zastava, ime, maternjeIme, populacija, glavniGrad, domen)
    }

    document.querySelector('main').innerHTML = ``
    document.querySelector('main').append(...Countries(params))

}



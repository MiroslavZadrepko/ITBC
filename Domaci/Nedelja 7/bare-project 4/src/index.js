import { getAllCountries } from "./service";

class Country {
    constructor(flag, name, capital, languages, timezones, population) {
        this.flag = flag
        this.name = name
        this.capital = capital
        this.languages = languages
        this.timezones = timezones
        this.population = population
    }
}
let nizDrzava = [] //odabranih 15 država će biti tu

// sve zemlje i biranje 15 za ispis, ispis
getAllCountries().then(res => {
    let countries = res.data

    for (let i = 0; i < 15; i++) {

        let zemlja = new Country()
        zemlja = countries[Math.floor(Math.random() * countries.length)]
        nizDrzava.push(zemlja)

        let img = document.createElement('img')
        img.src = zemlja.flag
        img.style.width = "100px"
        img.alt = `Flag of ${zemlja.flag}`

        let pName = document.createElement('p')
        pName.textContent = `ZEMLJA: ${zemlja.name}`

        let pCapital = document.createElement('p')
        pCapital.textContent = `GLAVNI GRAD: ${zemlja.capital}`

        img.addEventListener(`click`, (event) => {
            event.preventDefault()
            ispisSve(zemlja)
        })

        document.querySelector('#app').append(img, pName, pCapital, document.createElement('hr'))

    }
    return nizDrzava
})

// ispish podataka za jednu zemlju
let ispisSve = (zemlja) => {
    document.querySelector('#app').innerHTML = ``

    let redniBroj = 0
    redniBroj = nizDrzava.indexOf(zemlja)

    let img = document.createElement('img')
    img.src = zemlja.flag
    img.style.width = "100px"
    img.alt = `Flag of ${zemlja.flag}`

    let pName = document.createElement('p')
    pName.textContent = `ZEMLJA: ${zemlja.name}`

    let pCapital = document.createElement('p')
    pCapital.textContent = `GLAVNI GRAD: ${zemlja.capital}`

    let lang = document.createElement('p')
    let jezik = zemlja.languages.map(lang => lang.name)
    lang.textContent = `ZVANIČNI JEZICI: ${jezik}`

    let timeZone = document.createElement('p')
    timeZone.textContent = `VREMENSKA ZONA: ${zemlja.timezones}`

    let pops = document.createElement('p')
    pops.textContent = `BROJ STANOVNIKA: ${zemlja.population}`

    let all = document.createElement(`button`)
    all.innerText = `All`
    all.addEventListener(`click`, (event) => ispisAll())

    let prev = document.createElement(`button`)
    prev.innerText = `Prev`
    prev.addEventListener(`click`, () => {
        if (redniBroj < 1) {redniBroj = 1} 
        ispisSve(nizDrzava[`${redniBroj}` - 1])
    })

    let next = document.createElement(`button`)
    next.innerText = `Next`
    next.addEventListener(`click`, () => {
        if (redniBroj > 13) {redniBroj = 13}
        ispisSve(nizDrzava[redniBroj + 1])
    })

    document.querySelector('#app').append(img, pName, pCapital, lang, timeZone, pops, all, prev, next)
}

//na klik button prev, next, all =>
let ispisAll = () => {
    document.querySelector('#app').innerHTML = ``

    nizDrzava.forEach(zemlja => {
        let img = document.createElement('img')
        img.src = zemlja.flag
        img.style.width = "100px"
        img.alt = `Flag of ${zemlja.flag}`

        let pName = document.createElement('p')
        pName.textContent = zemlja.name

        let pCapital = document.createElement('p')
        pCapital.textContent = zemlja.capital

        img.addEventListener(`click`, (event) => {
            event.preventDefault()
            ispisSve(zemlja)
        })

        document.querySelector('#app').append(img, pName, pCapital, document.createElement('hr'))
    });

}


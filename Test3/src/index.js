import { Company, GetRocket } from "./service";
import { Satelites } from "./service";
import { NextLaunch } from "./service";

let companyName = document.createElement(`p`)
let companyYear = document.createElement(`p`)
let companyHQ = document.createElement(`p`)
document.querySelector(`header`).append(companyName, companyYear, companyHQ)

Company().then(res => {
    let companyData = res.data
    companyName.innerText = `${companyData.name}`
    companyYear.innerText = `${companyData.founded}`
    companyHQ.innerText = `${companyData.headquarters.address}, ${companyData.headquarters.state}, ${companyData.headquarters.city}`
})

Satelites().then(res => {
    let satelites = res.data
    ispis(satelites)
    document.querySelector(`#select`).append(Select(new Set(satelites.map(satelites => satelites.version)), satelites))
})

NextLaunch().then(res => {
    let sledeceLansiranje = res.data

    document.querySelector(`#btn-upcoming`).addEventListener(`click`, () => {
        let slika = document.createElement(`img`)
        let ime = document.createElement(`p`)
        let id = document.createElement(`p`) //povući podatke sa rockets, pa naći taj ID

        slika.src = `${sledeceLansiranje.links.flickr.small}`
        ime.innerText = `Sledeće lansiranje: ${sledeceLansiranje.name}`
        
        GetRocket().then(res => {
            let raketla = res.data
            let imeRaketle = document.createElement(`p`)
            let slikaRaketle = document.createElement(`img`)
            imeRaketle.innerText=`Ime rakete ${raketla.name}`
            slikaRaketle.src=`${raketla.flickr_images[0]}`
            document.querySelector(`.launch-list`).append(imeRaketle, slikaRaketle)

        })

        document.querySelector(`.launch-list`).innerHTML = ``
        document.querySelector(`.launch-list`).append(slika, ime)

        let back = document.createElement(`button`)
        back.innerText = `Nazad`
        back.addEventListener(`click`, (event) => {
            event.preventDefault()
            Satelites().then(res => {
                let satelites = res.data
                ispis(satelites)
            })
        })
        document.querySelector(`.launch-list`).append(back)
    })
})

let filtriraniSateliti = []
const Select = (options, satelites) => {
    const select = document.createElement(`select`)
    document.querySelector(`#select`).append(select)

    const defOption = document.createElement(`option`)
    defOption.value = `-1`
    defOption.disabled = true
    defOption.selected = true
    defOption.textContent = `Izaberite verziju`

    select.append(defOption)

    options.forEach(option => { //ne sme biti isti naziv kao deklarisana const, u ovom slucaju optn
        const optn = document.createElement(`option`)
        optn.value = option
        optn.textContent = option
        select.append(optn)
    })

    select.addEventListener(`change`, () => {
        filtriraniSateliti = satelites.filter(obj => obj.version == select.value)
        ispis(filtriraniSateliti)
    })
    return select
}

const ispis = (satelites) => {
    document.querySelector(`.launch-list`).innerHTML = ``

    for (let i = 0; i < satelites.length; i++) {

        let version = document.createElement(`p`)
        let tle = document.createElement(`p`)
        version.innerText = `${satelites[i].version}`
        tle.innerText = `${satelites[i].spaceTrack.TLE_LINE0}`
        document.querySelector(`.launch-list`).append(version, tle)
    }
}
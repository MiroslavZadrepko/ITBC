let ime, sifra, noviKupac, noviPrehrambeni, novaTehnika, unos, naziv, cena, rok, garancija
let korpa = []
let divProizvod = document.createElement(`div`)

class Kupac {
    constructor(ime, sifra, korpa) {
        this.ime = ime
        this.sifra = sifra
        this.korpa = korpa
    }
    displey() {

        if (ime === undefined) {
            document.querySelector(`#span`).innerText = ` Vaša korpa je prazna, a morate i da se logujete`
        } else {

            korpa.forEach(element => {
                document.querySelector(`.korpa`).append(divProizvod)
                divProizvod.innerHTML = `
                    <p>Naziv: ${element.naziv}</p>
                    <p>Cena: ${element.cena}</p>
                    <p>Rok trajanja: ${element.rok}</p>
                    <p>Garancija: ${element.garancija}</p>
                    <button class = "brisanje">Obrisi iz korpe</button>`
            })
        }
    }
}

document.querySelector(`#log`).addEventListener(`click`, (event) => {
    event.preventDefault()
    ime = document.querySelector(`#username`).value
    sifra = document.querySelector(`#password`).value
    noviKupac = new Kupac(ime, sifra, korpa)
    console.log(noviKupac);
    document.querySelector(`#span`).innerText = `${ime}`
    noviKupac.displey()
})

class Proizvod {
    constructor(naziv, cena, dostupno) {
        this.naziv = naziv
        this.cena = cena
        this.dostupno = dostupno
    }

}

document.querySelector(`#dodajHrana`).addEventListener(`click`, (event) => {
    event.preventDefault()

    naziv = document.querySelector(`#mleko`).innerHTML
    cena = document.querySelector(`#cenaM`).innerHTML
    rok = document.querySelector(`#rok`).innerText
    noviPrehrambeni = new Prehrambeni(naziv, cena, 5, rok)
    korpa.push(noviPrehrambeni)
    console.log(korpa);
    
   
})

class Prehrambeni extends Proizvod {
    constructor(naziv, cena, dostupno, rok) {
        super(naziv, cena, dostupno)
        this.rok = rok
    }
    display() {
        if (ime === undefined) {
            document.querySelector(`#span`).innerText = ` Vaša korpa je prazna, a morate i da se logujete`
        } else {
        korpa.forEach(element => {
            document.querySelector(`.korpa`).append(divProizvod)
            divProizvod.innerHTML = `
                <p>Naziv: ${element.naziv}</p>
                <p>Cena: ${element.cena}</p>
                <p>Rok trajanja: ${element.rok}</p>
                <p>Garancija: ${element.garancija}</p>
                <button class = "brisanje">Obrisi iz korpe</button>`
        })}
    }

} 


document.querySelector(`#dodajTehniku`).addEventListener(`click`, (event) => {
    event.preventDefault()

    naziv = document.querySelector(`#sporet`).innerHTML
    cena = document.querySelector(`#cenaS`).innerHTML
    garancija = document.querySelector(`#garancija`).innerText
    novaTehnika = new BelaTehnika(naziv, cena, 5, garancija)
    korpa.push(novaTehnika)
    console.log(korpa);
})


class BelaTehnika extends Proizvod {
    constructor(naziv, cena, dostupno, garancija) {
        super(naziv, cena, dostupno)
        this.garancija = garancija
    }
    display() {

        if (ime === undefined) {
            document.querySelector(`#span`).innerText = ` Vaša korpa je prazna, a morate i da se logujete`
        } else {

        korpa.forEach(element => {
            document.querySelector(`.korpa`).append(divProizvod)
            divProizvod.innerHTML = `
                <p>Naziv: ${element.naziv}</p>
                <p>Cena: ${element.cena}</p>
                <p>Rok trajanja: ${element.rok}</p>
                <p>Garancija: ${element.garancija}</p>
                <button class = "brisanje">Obrisi iz korpe</button>`
        })}
    }
}


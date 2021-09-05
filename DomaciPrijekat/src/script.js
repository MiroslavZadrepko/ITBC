import { procSkraceno, ispisSaldo, ispisZeleno, ispisCrveno } from './ispisi.js';

class Prihod {
    constructor(count, opis, iznos) {
        this.id = count;
        this.opis = opis;
        this.iznos = iznos;
    }
}

class Rashod {
    constructor(count, opis, iznos, procenat) {
        this.id = count;
        this.opis = opis;
        this.iznos = iznos;
        this.procenat = procenat
    }
}

let prihodi = [];
let rashodi = [];
let ukupanPrihod = 0;
let ukupanRashod = 0;
let saldo = 0;
let count = 0;
let iznos
let opis
let izbor
let procenat



let prvoDugme = document.querySelector(`#brisanjeSvega`)

prvoDugme.addEventListener(`click`, (event) => {
    event.preventDefault();
    localStorage.clear();
    ukupanPrihod = 0; ukupanRashod = 0; procenat = 0; saldo = 0; count = 0;
    ispisiBrojni(ukupanPrihod, ukupanRashod, procenat, saldo)
    window.location.reload();

})

if (localStorage.length !== 0) {

    let ukupanPrihod = Number(localStorage.getItem(`ukupanPrihod`));
    ispisZeleno(ukupanPrihod)

    ukupanRashod = Number(localStorage.getItem(`ukupanRashod`));
    ispisCrveno(procenat, ukupanPrihod, ukupanRashod)

    ispisSaldo(saldo, ukupanPrihod, ukupanRashod)
    
    count = Number(localStorage.getItem(`count`));
}

document.querySelector('#formaUnos').addEventListener('click', (event) => {
    event.preventDefault()

    let o = document.querySelector(`#opisTransakcije`)
    opis = o.value
    if (opis == ``) {
        opis = '';
        o.placeholder = 'Obavezno polje';
        o.style.backgroundColor = 'rgb(' + 245 + ',' + 54 + ',' + 54 + ')'
        o.addEventListener(`click`, () => {
            o.style.backgroundColor = `white`
        })
        return
    }

    iznos = (parseFloat((document.querySelector(`#iznosTransakcije`)).value))
    if (Math.sign(iznos) !== 1) {
        let idIznos = document.querySelector(`#iznosTransakcije`)
        idIznos.value = '';
        idIznos.placeholder = 'Unesite iznos veći od 0';
        idIznos.style.backgroundColor = 'rgb(' + 245 + ',' + 54 + ',' + 54 + ')'
        idIznos.addEventListener(`click`, () => {
            idIznos.style.backgroundColor = `white`
        })
        return
    }

    izbor = document.querySelector(`#izborTransfera`).value
    if (izbor == "prihod") {
        prihod(opis, iznos)

    } else if (izbor == "rashod") {
        rashod(opis, iznos)

    } else {
        let idIzbor = document.querySelector(`#izborTransfera`);
        idIzbor.value == "izaberite";
        idIzbor.style.backgroundColor = 'rgb(' + 245 + ',' + 54 + ',' + 54 + ')'
        idIzbor.addEventListener(`click`, () => {
            idIzbor.style.backgroundColor = `white`
        })
    }
})




function ispisiBrojni(ukupanPrihod, ukupanRashod, procenat, saldo) {

    ispisZeleno(ukupanPrihod);
    ispisCrveno(procenat, ukupanPrihod, ukupanRashod);
    ispisSaldo(saldo, ukupanPrihod, ukupanRashod);
}

function prihod(opis, iznos) {

    ukupanPrihod = ukupanPrihod + iznos;
    ispisZeleno(ukupanPrihod);
    const noviPrihod = new Prihod(count++, opis, iznos);
    racunanjeProcenata(ukupanRashod, ukupanPrihod);
    prihodi.push(noviPrihod);
    ispisivanje(noviPrihod, prihodi)
    return ukupanPrihod;
}

function rashod(opis, iznos) {

    ukupanRashod = ukupanRashod + iznos;
    racunanjeProcenata(ukupanRashod, ukupanPrihod);
    const noviRashod = new Rashod(count++, opis, iznos, procSkraceno);
    rashodi.push(noviRashod)
    ispisivanje(noviRashod, rashodi)
    return ukupanRashod
}

function racunanjeProcenata(proc, rashod, prihod) {
    ispisCrveno(procenat, ukupanPrihod, ukupanRashod)
    return procSkraceno
}

function ispisivanje(unos, unosi) {

    let ispis = document.createElement(`div`)
    ispis.classList.add(`scndFlexCont`)
    let vrednosti = Object.values(unos)
    console.log(vrednosti);
    let locVrednosti = vrednosti[2].toLocaleString()

    if (izbor == `prihod`) {
        document.querySelector(`.prihodi`).append(ispis)
        ispis.innerHTML = `
        
            <p class="scndFlexItem"> ${vrednosti[1]} </p>
            <button id="btnDelete" style="visibility: hidden;">Obriši</button>
            <p style="text-align: right; color: #03fc8c;" class="scndFlexItem"> + ${locVrednosti} </p>
            <hr style="width:100%;text-align:left;margin-left:0">`

    } else {
        document.querySelector(`.rashodi`).append(ispis)
        let procenatStavke
        if (ukupanPrihod == 0) { procenatStavke = 0; }
        else { procenatStavke = (100 * vrednosti[2]) / ukupanPrihod; }

        let procStavke = procenatStavke.toFixed(2)
        ispis.innerHTML = `
        
            <p class="scndFlexItem"> ${vrednosti[1]} </p>
            <button id="btnDelete" style="visibility: hidden;">Obriši</button>
            <p style="text-align: right; color: #fc3d03;" class="scndFlexItem"> - ${locVrednosti} <font size="1" style="background-color: rgb(252, 167, 167); margin:4px; padding:4px; border-radius:5px;"> ${procStavke}% </font></p>
            <hr style="width:100%;text-align:left;margin-left:0">`
    }

    ispisSaldo(saldo, ukupanPrihod, ukupanRashod);
    let dugme = ispis.querySelector(`#btnDelete`)

    ispis.addEventListener(`mouseenter`, () => { dugme.style = "visibility: visible;"; })
    ispis.addEventListener(`mouseleave`, () => { dugme.style = "visibility:hidden;" })

    dugme.addEventListener(`click`, () => {
        ispis.remove()
        let index = unosi.findIndex(x => x.id == unos.id);
        unosi.splice(index, 1)

        if (unos.hasOwnProperty(`procenat`)) {
            ukupanRashod = ukupanRashod - unos.iznos
            ispisSaldo(saldo, ukupanPrihod, ukupanRashod);
            racunanjeProcenata(ukupanRashod, ukupanPrihod)

        } else {
            ukupanPrihod = ukupanPrihod - unos.iznos
            ispisSaldo(saldo, ukupanPrihod, ukupanRashod);

            ispisZeleno(ukupanPrihod)

            racunanjeProcenata(ukupanRashod, ukupanPrihod)
        }

        return saldo;
    })
}

document.addEventListener('visibilitychange', function () {
    if (document.visibilityState == 'hidden') {

        localStorage.setItem(`ukupanPrihod`, ukupanPrihod)
        localStorage.setItem(`ukupanRashod`, ukupanRashod)
        localStorage.setItem(`count`, count)
    }
})

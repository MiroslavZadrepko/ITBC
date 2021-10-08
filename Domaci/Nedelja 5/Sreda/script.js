// Napisati validaciju za formu koja sadrzi polja: 
// input-text(name, surname, password, passwordConfirm) 
// checkbox(courses)
// select(city)
// radiobutton(gender)
// Za polje name => obavezno, minimum 5 karaktera, maksimum 15
// Za polje surname => obavezno, minimum 5 karaktera, maksimum 20
// Za polje password => obavezno, minimum 8 karaktera, da sadrzi broj i veliko slovo
// Za polje passwordConfirm => da je isto kao i password
// Za polje course => obavezno

//klikom na register ako validacija ne prodje ispisati greske ispod polja (za svako polje ponaosob)
//ako validacija prodje, kreirati objekat user ubaciti ga u niz users i ispisati ga na ekranu (ispisati ceo niz)
//kada se kreira user: 1. ime i prezime mora biti trimovano i setovati samo prvo slovo kao veliko a sva ostala da budu mala
//nakon svakog unosa potrebno je ispisati novog user-a i obrisati sve inpute (staviti ih na pocetne vrednosti)

//HTML I CSS po sopstvenom izboru!!!!!!!!!!!!!!!

let user
let sure
let pass
let confPass
let chkBoxes
let chkdCourse
let korisnik = {
    ime: ``,
    prezime: ``,
    lozinka: ``,
    kurs: ``,
    grad: ``,
    pol: ``
}

function validacijaImena() {
    user = document.querySelector(`#user`).value;
    let ispisGreške = document.querySelector(`.greskaIme`)

    if (user == ``) {
        ispisGreške.innerText = `Ovo polje je obavezno`
    } else if (user.length < 5 || user.length > 15) {
        ispisGreške.innerText = `Polje ne sme imati manje od 5, ni više od 15 karaktera`
    } return user
}

function validacijaPrezimena() {

    sure = document.querySelector(`#sure`).value;
    let ispisGreške = document.querySelector(`.greskaPrezime`)

    if (sure == ``) {
        ispisGreške.innerText = `Ovo polje je obavezno`
    } else if (sure.length < 5 || sure.length > 20) {
        ispisGreške.innerText = `Polje ne sme imati manje od 5, ni više od 20 karaktera`
    } return sure
}

function validacijaPass() {
    pass = document.querySelector(`#pass`).value;
    let ispisGreške = document.querySelector(`.greskaPass`)

    if (pass == ``) {
        ispisGreške.innerText = `Ovo polje je obavezno`
    } else if (pass.length < 8) {
        ispisGreške.innerText = `Polje ne sme imati manje od 8 karaktera`
    } else if (!/\d/.test(pass)) {
        ispisGreške.innerText = `Polje mora sadržati bar jedan broj`
    } else if (!/[A-Z]/.test(pass)) {
        ispisGreške.innerText = `Polje mora sadržati bar jedno veliko slovo`
    } return pass
}

function duplaValidacijaPass() {
    confPass = document.querySelector(`#confPass`).value;
    let ispisGreške = document.querySelector(`.greskaConfPass`)

    if (pass != confPass) {
        ispisGreške.innerText = `Greška u unosu, razlika u odnosu na pass`
    } return true;
}

function coursChk() {
    let chkBoxes = document.querySelectorAll('input[type="checkbox"]');
    let chkOne = Array.prototype.slice.call(chkBoxes).some(x => x.checked);

    let ispisGreške = document.querySelector(`.greskaKurs`)

    if (chkOne == true) {
        chkdCourse = document.querySelector('.ckd:checked').value;
        return chkdCourse
    } else {
        ispisGreške.innerText = `Izbor kursa je obavezan`
    }
}

let grad
function gradIzbor() {

    let txt = document.querySelector("#city")
    grad = txt.options[txt.selectedIndex].value;
    return grad
}


function polIzbor() {

    if (document.querySelector('#muški').checked) {
        pol = `muški`
    } else if (document.querySelector('#ženski').checked) {
        pol = `ženski`
    } else if (document.querySelector('#moderno').checked) {
        pol = `Nešto totalno moderno`
    } else pol = `Ne izjašnjava se`

    return pol
}

function registracija() {

    let ispis = document.querySelector(`#ispis`)

    ispis.innerHTML = `
    Ime: ${validacijaImena()},
    Prezime: ${validacijaPrezimena()},
    Lozinka: ${validacijaPass()},
    Kurs: ${chkdCourse},
    Grad: ${gradIzbor()},
    Pol: ${polIzbor()}`

    if (validacijaImena() == false || validacijaPrezimena() == false || validacijaPass() == false || coursChk() == false) {
        ispis.innerHTML = ` `
    }
    user = document.querySelector(`#user`).value = ``;
    sure = document.querySelector(`#sure`).value = ``;
    pass = document.querySelector(`#pass`).value = ``;
    confPass = document.querySelector(`#confPass`).value = ``;
    chkdCourse = document.querySelector('.ckd:checked').checked=false;
    pol = document.querySelector('input[name="radio"]:checked').checked = false;
}
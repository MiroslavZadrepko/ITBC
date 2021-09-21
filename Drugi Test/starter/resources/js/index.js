let dinos = [
    {
        id: 0,
        name: 'Scipionyx',
        img: 'http://images.dinosaurpictures.org/Scipionyx_QY_200_3742.jpg',
        cena: 221
    },
    {
        id: 1,
        name: 'Becklespinax',
        img: 'http://images.dinosaurpictures.org/altispinax-becklespinax_e05c.jpg',
        cena: 275
    },
    {
        id: 2,
        name: 'Sciurumimus',
        img: 'http://images.dinosaurpictures.org/Sciurumimus_albersdoerferi_web_fa15.jpg',
        cena: 341
    },
    {
        id: 3,
        name: 'Hypsilophodon',
        img: 'http://images.dinosaurpictures.org/hypsilophodon-1024x636_6963.jpg',
        cena: 189
    },
    {
        id: 4,
        name: 'Dacentrurus',
        img: 'http://images.dinosaurpictures.org/Dacentrurus_20140118_5d27.jpg',
        cena: 315
    },
    {
        id: 5,
        name: 'Iguanodon',
        img: 'http://images.dinosaurpictures.org/Iguanodon_1157950_ea00.jpg',
        cena: 374
    },
    {
        id: 6,
        name: 'Asylosaurus',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Asylosaurus_NT.jpg/440px-Asylosaurus_NT.jpg',
        cena: 301
    },
    {
        id: 7,
        name: 'Efraasia',
        img: 'http://images.dinosaurpictures.org/efraasia_0a4e.jpg',
        cena: 199
    },
    {
        id: 8,
        name: 'Cryptosaurus',
        img: 'https://images.dinosaurpictures.org/Cryptosaurus/Cryptosaurus_tumblr_inline_on3a5nVchm1rx4yme_1280_94c8.jpg',
        cena: 218
    }
]

let btnNaruci = document.querySelector(`#naruci`)
let svePorudzbine = []
btnNaruci.addEventListener(`click`, (event) => {
    event.preventDefault()

    let inputKupac = document.querySelector(`#kupac`)
    let inputDino = document.querySelector(`#select-dino`)
    let inputNapomena = document.querySelector(`#napomena`)


    let porudzbina =
    {
        kupac: inputKupac.value,
        dino: inputDino.value,
        napomena: inputNapomena.value
    }

    if (porudzbina.napomena = ` `) {
        porudzbina.napomena = ` /`
    }

    let item = document.createElement(`div`)
    item.className = `item`
    document.querySelector(`#granicnik`).append(item)
    item.innerHTML = `
        <p><span>Купац:${porudzbina.kupac}</span></p>
        <p><span>Напомена:${porudzbina.napomena}</span> </p>
        <p><span>Диносаурус:${porudzbina.dino}</span> </p>
        `
    let btnDelete = document.createElement(`button`)
    btnDelete.innerText = `OBRIŠI`
    item.append(btnDelete)
    btnDelete.addEventListener(`click`, () => {
        btnDelete.parentElement.remove()
        svePorudzbine.splice(svePorudzbine.indexOf(porudzbina), 1)
    })

    svePorudzbine.push(porudzbina)

    let consoleLog = document.querySelector(`#btn-all`)
    consoleLog.addEventListener(`click`, (event) =>

        console.log(svePorudzbine)
    )
})











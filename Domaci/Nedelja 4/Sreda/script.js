let pokemoni1Lista = document.getElementById(`Pokemoni1`);

pokemoni1Lista.addEventListener(`click`, (event) => {
    event.preventDefault();
    let div1 = document.getElementById(`div1`)
    pokemoni1Lista.remove()
    let jedanPokemon

    for (let i = 0; i < pokemoni.length; i++) {
        jedanPokemon = document.createElement(`button`)
        jedanPokemon.id = i
        div1.appendChild(jedanPokemon)
        let imePokemona = Object.values(pokemoni[i].Ime).join(``)
        jedanPokemon.textContent = imePokemona

        let ispisPokemona = document.createElement(`p`)
        div1.appendChild(ispisPokemona)

        jedanPokemon.addEventListener(`click`, (event) => {
            event.preventDefault()
            let ajdi = event.target.id
            let ispis = JSON.stringify(pokemoni[ajdi])
            ispisPokemona.innerText = ispis
        })
    }

})


let pokemoni2Lista = document.getElementById(`Pokemoni2`);

pokemoni2Lista.addEventListener(`click`, (event) => {
    event.preventDefault();
    let div2 = document.getElementById(`div2`)
    pokemoni2Lista.remove()
    let jedanPokemon

    for (let i = 0; i < pokemoni.length; i++) {
        jedanPokemon = document.createElement(`button`)
        jedanPokemon.id = i
        div2.appendChild(jedanPokemon)
        let imePokemona = Object.values(pokemoni[i].Ime).join(``)
        jedanPokemon.textContent = imePokemona

        let ispisPokemona = document.createElement(`p`)
        div2.appendChild(ispisPokemona)

        jedanPokemon.addEventListener(`click`, (event) => {
            event.preventDefault()
            let ajdi = event.target.id
            const ispis = JSON.stringify(pokemoni[ajdi])
            ispisPokemona.innerText = ispis

        })
    }

})


let pokemoni = [{
    Ime: `žuti`,
    Vrsta: `mali`,
    Sposobnosti: [`fly`, `evade`, `curse`],
    Karakteristike: {
        napad: 4,
        odbrana: 4,
        brzina: 4
    }
}, {
    Ime: `plavi`,
    Vrsta: `veliki`,
    Sposobnosti: [`taunt`, `block`, `poison`],
    Karakteristike: {
        napad: 1,
        odbrana: 14,
        brzina: 1
    }
}, {
    Ime: `crni`,
    Vrsta: `mali`,
    Sposobnosti: [`speed`, `double strike`, `stealth`],
    Karakteristike: {
        napad: 3,
        odbrana: 1,
        brzina: 5
    }
}, {
    Ime: `beli`,
    Vrsta: `jako mali`,
    Sposobnosti: [`heal`, `aura`, `resurect`],
    Karakteristike: {
        napad: 2,
        odbrana: 2,
        brzina: 3
    }
}]

/*2. zadatak sam uradio na dva načina, nisam  bio siguran koji je bolji/tačniji. Prva verzija rešenja je zakomentarisana*/

// //1. Napisati funkciju koja ispisuje sve elemente datog niza koji su deljivi sa 5

let niz = [3, 6, 5, 99, 4, 54, 77, 55, 30];

function deljivi(niz) {
    niz.forEach(niz => {
        if (niz % 5 == 0) {
            console.log(niz);
        }
    });
}
deljivi(niz);

// //2. Napraviti objekat pokemon koji sadrži sledeće informacije: (Napravite makar 4 različita pokemona)
// // * Ime 
// // * Vrsta 
// // * Sposobnosti (niz sposobnosti pokemona) 
// // * Karakteristike (objekat sa informacijama : napad (broj), odbrana (broj), brzina (broj))

// //(Napraviti niz od ovih objekata)

// let pokemon1 = {
//     Ime: `žuti`,
//     Vrsta: `mali`,
//     Sposobnosti: [`fly`, `evade`, `curse`],
//     Karakteristike: {
//         napad: 4,
//         odbrana: 4,
//         brzina: 4
//     }
// }
// let pokemon2 = {
//     Ime: `plavi`,
//     Vrsta: `veliki`,
//     Sposobnosti: [`taunt`, `block`, `poison`],
//     Karakteristike: {
//         napad: 1,
//         odbrana: 14,
//         brzina: 1
//     }
// }
// let pokemon3 = {
//     Ime: `crni`,
//     Vrsta: `mali`,
//     Sposobnosti: [`speed`, `double strike`, `stealth`],
//     Karakteristike: {
//         napad: 3,
//         odbrana: 1,
//         brzina: 5
//     }
// }
// let pokemon4 = {
//     Ime: `beli`,
//     Vrsta: `jako mali`,
//     Sposobnosti: [`heal`, `aura`, `resurect`],
//     Karakteristike: {
//         napad: 2,
//         odbrana: 2,
//         brzina: 3
//     }
// }
// let pokemoni = [pokemon1, pokemon2, pokemon3, pokemon4]

// //3. Napraviti funkciju koja prima niz gore napravljenih objekata i vraća jedan niz sposobnosti svih pokemona

// let tmpSpos = [];

// function sveSposobnosti(pokemon) {
//     for (let i = 0; i < pokemoni.length; i++) {
//         tmpSpos.push(Object.values(pokemoni[i].Sposobnosti))
//     } return tmpSpos
// };
// console.log(sveSposobnosti(pokemoni));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //2. Napraviti objekat pokemon koji sadrži sledeće informacije: (Napravite makar 4 različita pokemona)
// // * Ime 
// // * Vrsta 
// // * Sposobnosti (niz sposobnosti pokemona) 
// // * Karakteristike (objekat sa informacijama : napad (broj), odbrana (broj), brzina (broj))

// //(Napraviti niz od ovih objekata)
console.log(`---------------------------`);

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

//3. Napraviti funkciju koja prima niz gore napravljenih objekata i vraća jedan niz sposobnosti svih pokemona
console.log(`---------------------------`);

let tmpSpos = [];

function sveSposobnosti(pokemon) {
    for (let i = 0; i < pokemoni.length; i++) {
        tmpSpos = tmpSpos.concat(Object.values(pokemoni[i].Sposobnosti))
    } return tmpSpos
};
console.log(sveSposobnosti(pokemoni));

////////////////////////////////////////////ZA PETAK////////////////////////////////////
//4. Sortirati pokemone po brzini, rastuće.
console.log(`---------------------------`);

pokemoni.sort((a, b,) => (a.Karakteristike.brzina > b.Karakteristike.brzina) ? 1 : -1)
console.log(pokemoni);

//5. Napraviti funkciju koja prima niz pokemona, poredi pokemone po jačini i vraća kao pobednika onog koji ima najveću jačinu napada.
console.log(`------------------------`);

const najjaci = (nizPokemona) => {
    let najjaciPokemon = []
    pokemoni.sort((a, b,) => (a.Karakteristike.napad < b.Karakteristike.napad) ? 1 : -1)
    return najjaciPokemon = pokemoni[0]
}



console.log(najjaci(pokemoni));
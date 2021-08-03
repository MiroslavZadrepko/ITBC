/*
1. Puz se penje uz drvo odredjenom brzinom (recimo da predje 3cm da dan).
Drvo svaki dan poraste za 1 cm.

Za zadatu brzinu puza (u centrimetrima po danu) i zadatu pocetnu visinu drveta (u centimetrima),
izracunati koliko je dana potrebno puzu da se popne na drvo
pomocu WHILE petlje.

Napraviti presek svakog dana, dakle program treba da izbaci sledece poruke (za brzinu puza 3 i visinu drveta 100) :

Dan 1: Puz je presao 3cm, visina drveta 100cm
Dan 2: Puz je presao 6cm, visina drveta 101cm
...

Na kraju treba da se ispise poruka na primer:

Puz se popeo na drvo za 8 dana

Smatrati da drvo svakog dana raste fiksno 1cm.


let predjeniPut = 0;
let visinaDrveta = 100;
let dan = 0;

while (predjeniPut<visinaDrveta) {
    predjeniPut += 3;
    visinaDrveta ++;
    dan ++
    console.log(`Dan ${dan}: Puž je prešao ${predjeniPut} cm, visina drveta je ${visinaDrveta} cm.`);
}
console.log(`Puž se popeo za ${dan} dana.`);

*//*
2. Treba izracunati poptust U DINARIMA koji ostvaruje kupac.

Pravila za ostvarivanje popusta su sledeca:

Zaposlena lica ostvaruju popust od 5% za iznos koji je veci od 5000 din.
Studenti ostvaruju popust 20% za isnose koji su veci od 3000 din.
Penzioneri ostvaruju popust od 30% za iznose koji su veci od 2000 din.
Firme ostvaruju popust od 10% za iznose koji su veci od 10000 din.
Svi ostali ne ostaruju nikakav popust.

Ako kupovina pada za vikend (subota ili nedelja)
odnosno ako je TEKUCI DAN U NEDELJI kada se izvrsava program subota ili nedelja,
onda je u toku vikend akcija gde svi ostvaruju dodatni popust od 5%,
osnova za dodatni popust je iznos umanjen za prethodni popust na osnovu tipa kupca na primer:

Iznos je 10000 din, na osnovu tipa kupac je ostvario popust od 2000 din,
osnova za vikend akciju je 10000 - 2000 = 8000 din,
dakle racuna se 5% od 8000 din a ne od pocetnog iznosa
i dobije se dodatni popust od 400.
Tako da je na kraju ukupan popust 2000 + 400 = 2400 dinara
*/

//kejs zaposleni, popust je ..., iznos je 

let iznos = 10000;
let popust, dodatniPopust, racun, konacniRacun;
let greska = `Pogrešan unos jedne ili više vrednosti`;
let kupac = prompt("Da li je kupac zaposleni, student, penzioner, firma ili nezaposlen?");
let dan = prompt("Da li je radni dan ili vikend?")

if (kupac == '' || kupac == null || dan == '' || dan == null || kupac != NaN || dan != NaN) {
    kupac = greska;
    dan = greska;
    console.log(`${greska}`);

} else {

switch (kupac) {
    case "zaposleni":
        popust = (iznos > 5000) ? ((iznos / 100) * 5) : 0;
        racun = iznos - popust;
        console.log(`Popust po ovom osnovu izosi ${popust}. Racun iznosi ${racun}`);
        break;

    case "student":
        popust = (iznos > 3000) ? ((iznos / 100) * 20) : 0;
        racun = iznos - popust;
        console.log(`Popust po ovom osnovu izosi ${popust}. Racun iznosi ${racun}`);
        break;

    case "penzioner":
        popust = (iznos > 2000) ? ((iznos / 100) * 30) : 0;
        racun = iznos - popust;
        console.log(`Popust po ovom osnovu izosi ${popust}. Racun iznosi ${racun}`);
        break;

    case "firma":
        popust = (iznos > 10000) ? ((iznos / 100) * 10) : 0;
        racun = iznos - popust;
        console.log(`Popust po ovom osnovu izosi ${popust}. Racun iznosi ${racun}`);
        break;

    case "nezaposlen":
        popust = 0;
        racun = iznos-popust;
        console.log(`Ne ostvarujete pravo na popust po ovom osnovu. Racun iznosi ${racun}`);
        break;

    default:
        console.log(`ovo je default poruka zarad testa`);
        break;
}

dodatniPopust = (dan == "radni dan") ? 0 : ((racun / 100) * 5);
konacniRacun = racun - dodatniPopust;

console.log(`Konačan iznos za plaćanje, umanjen za vikend popust, iznosi ${konacniRacun}`);
}

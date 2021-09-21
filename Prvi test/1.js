/* 1. Zadatak (25 poena)
Napisati funkciju racun(cena,dan,penzioner)
cena - Broj veci od 0 - Proveriti ispravnost
dan - Broj izmedju 1 i 7 (oznacava dane u nedelji) - Bez provere
penzioner - true / false (oznacava da li je kupac penzioner) - Bez provere
Funkcija VRACA racun na sledeci nacin:
1. Ako je kupac penzioner i nedelja je: popust od 25%
2. Ako je kupac penzioner i nije nedelja: popust od 10%
3. Ako kupac nije penzioner i sreda je: popust od 10%
4. Ako kupac nije penzioner i nije sreda: nema popusta
Napomena: Rad bez funkcije - 60% poena
Primer:
racun(150,1,false)
racun(100,7,true)
racun(100,3,true)
150 - Nema popusta, jer vazi slucaj 4
75 - Popust 25%, jer vazi prvi slucaj
90 - Popust 10%, jer vazi 2. slucaj
*/

let cena;
let dan;
let penzioner = true;
let zavrsniRacun = 0;
let ispis = 0;



function racun(cena, dan, penzioner) {

    if (cena <= 0) {
        return console.log(`cena je manja od 0`);
    } else if (penzioner && dan == 7) {
        zavrsniRacun = cena - (25 / cena) * 100;
        return zavrsniRacun;
    } else if (penzioner && dan != 7) {
        return zavrsniRacun = cena - (10 / cena) * 100;
    } else if (!penzioner && dan == 3) {
        return zavrsniRacun = cena - (10 / cena) * 100;
    } else if (!penzioner && dan != 3) {
        return zavrsniRacun = cena;
    }
}
ispis = racun(100, 3, false);
console.log(ispis);
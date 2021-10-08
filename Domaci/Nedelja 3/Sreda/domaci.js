

// 1. Napisati funkciju koja vrsi sumiranje i mnozenje jednog niza i vratiti te vrednosti u niz

let niz = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let zbir = 0;
let proizvod = 1;

function sumaIProizvod(niz) {

    for (let i = 0; i < niz.length; i++) {
        zbir = zbir + niz[i];
        proizvod = proizvod * niz[i];
    }
    niz.push(zbir, proizvod);
    return niz;
}
let final = sumaIProizvod(niz);
console.log(final, `\n`, `-------------------------`);

// 2. Napisati funkciju koja iz datog niza izbacuje null, undefined, NaN, 0, "" itd...
let m
niz2 = [1, 2, 3, m, , `q`, 0, "knjiga", NaN];
noviNiz2 = [];

function ostaviSamoKaraktere(niz2) {
    for (let i = 0; i < niz2.length; i++) {
        if (typeof (niz2[i]) == "number" && (niz2[i])) {
            noviNiz2.push(niz2[i])
        }
    } return noviNiz2;
}

let rez = ostaviSamoKaraktere(niz2)
console.log(rez, `\n`, `-------------------------`);

//4. За првих 100 бројева исписати:
//      ако је дељив са 3  Fizz, са 5  Buzz, и са оба  FizzBuzz, у супротном Broj
//      Ако је дељив са 3,5,7 - FizzBuzzZazz
//      3,5 - FizzBuzz
//      3,7 - FizzZazz
//      5,7 - BuzzZazz

for (let i = 1; i < 101; i++) {

    if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0) {
        console.log(`FizzBuzzZazz`);
    } else if (i % 3 == 0 && i % 5 == 0) {
        console.log(`FizzBuzz`);
    } else if (i % 5 == 0) {
        console.log(`Buzz`);
    } else if (i % 3 == 0) {
        console.log(`Fizz`);
    } else console.log(i);
} console.log(`-------------------------`);

// 5. Izvrsiti inverziju brojeva bez pomocne promenljive. 
let x = 5; y = 9;

x = x + y;
y = x - y;
x = x - y;

// Mada se meni više sviđa ovaj način: :)
//[x,y] = [y,x];

console.log(x,y);

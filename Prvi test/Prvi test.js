/*
## Prvi test - Osnove JavaScript-a

### Uputstvo:
* Svaki zadatak se radi u jednom .js fajlu
* Imenovanje fajlova : 1.js 2.js 3.js 4.js
* Pazljivo procitati tekst zadatka i primer
* Test ima 4 zadatka i nosi 100 poena
  
<hr>
<hr>

1. Zadatak 

    Napisati program koji ispisuje racun u kafani , ali samo musterijama koje imaju vise od 18 godina.

    Popust se odobrava u sledeca dva slucaja:
    1. Broj godina je deljiv sa 7 (15% popusta)
    2. Broj godina je deljiv sa 11 (25% popusta)

    Ulazni podaci:
    * Kolicina (broj pica)
    * Cena jednog pica
    * Broj godina musterije

    Napomena: 
    Proveriti ulazne podatke (Validnost kolicine , cene i godina) 

    Primer:
    ```
    let kolicina = 9
    let cenaPoKomadu = 100
    let godine = 21
    ```
    ```
    Racun: 1377rsd

    Objasnjenje:
    - 9 * 180 = 1621
    - 21 je deljivo sa 7, pa se racuna i popust od 15%
    ```

2. Zadatak

let racun = '';
let godine = 21;
let kolicina = 9;
let cenaPoKomadu = 180;
let konacniRacun = 0;


if (godine<18) {
    console.log(`Mušterija nema dovoljno godina za ove artikle`);
}     
    racun = kolicina * cenaPoKomadu;

if (godine%7==0) {
    konacniRacun = racun - (25/100)*racun; 
    console.log(`Racun iznosi ${konacniRacun}`);

} else if (godine%11==0) {
    konacniRacun = racun - (15/100)*racun;
    console.log(`Racun iznosi ${konacniRacun}`);
    
} else console.log(`Racun iznosi ${racun}`);

Napisati program koji ispisuje pescani sat za uneto N . (Nema potrebe proveravati ulazne podatke)

```  
    N=4           N=3        
    *       *     *     *    
     *     *       *   *      
      *   *         * *       
       * *           *      
        *           * *
       * *         *   *
      *   *       *     *     
     *     *      
    *       *
```

Za pola poena ispisati gornju polovinu slike na prikazan nacin:
```
    N=4          N=3         N=2
    *       *     *     *    *   *
     *     *       *   *      * *
      *   *         * *        
       * *                
```

let N = 4; 
let stringZvezda = '*';
let stringPrazan = ' ';
let stringRed;

for (let i = 1; i <= N; i++) {

    stringRed = stringPrazan.repeat(i) + stringZvezda + stringPrazan.repeat(N-i) + stringPrazan + stringPrazan.repeat(N-i) + stringZvezda + stringPrazan.repeat(i);
    console.log(stringRed);
} 
console.log(stringPrazan.repeat(N+1) + stringZvezda + stringPrazan.repeat(N));
for(let i = 4; i !=0; i--) {
    
    stringRed = stringPrazan.repeat(i) + stringZvezda + stringPrazan.repeat(N-i) + stringPrazan + stringPrazan.repeat(N-i) + stringZvezda + stringPrazan.repeat(i);
    console.log(stringRed);
}


3. Zadatak

    Napisati program koji ispisuje zbir brojeva deljivih sa 3 i  proizvod brojeva koji nisu deljivi sa 3 a jesu sa 7 (Izmedju K i N ukljucujuci K i ne ukljucujuci N)

    Napomena : K moze biti vece od N

let K = 3;
let N = 8;
let T;
let zbir = 0;
let proizvod = 1;

if (K > N) {
    T = K;
    K = N;
    N = T;
}

for (; K < N; K++) {
    if(K%3==0) {
        zbir = zbir + K;
    } else if(K%3!=0 && K%7==0) {
        proizvod = proizvod*K;
    }
}
console.log(`Zbir iznosi ${zbir}, a proizvod ${proizvod}`);

4. Zadatak

    Napisati program koji ispisuje tablicu mnozenja na sledeci nacin:


    ```
    x| x * 1  x * 2  x * 3 .. x * 9

    Resenje izgleda ovako:
    1| 1 2 3 4 5 6 7 8 9
    2| 2 4 6 8 10 12 14 16 18
    3| 3 6 9 12 15 18 21 24 27
    4| 4 8 12 16 20 24 28 32 36
    5| 5 10 15 20 25 30 35 40 45
    6| 6 12 18 24 30 36 42 48 54
    7| 7 14 21 28 35 42 49 56 63
    8| 8 16 24 32 40 48 56 64 72
    9| 9 18 27 36 45 54 63 72 81
    ```
*/



/*
5. Zadatak

    Napraviti funkciju koja ISPISUJE poslednju cifru datog broja i VRACA dat broj bez poslednje cifre:
    ```
    let x = 41325

    x = obrisiPoslednjuCifru(x) //ispis ce biti 5
    console.log(x) //ispis ce biti 4132
    ```

    Bonus:
    Ispisati sve cifre broja x u obrnutom redosledu koristeci napravljenu funkciju.
    ```
    5
    2
    3
    1
    4
    ```

    Napomena : radi za bilo koje x vece od 0
   */
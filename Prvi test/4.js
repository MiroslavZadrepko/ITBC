/*4. Zadatak (20 poena)
Za svaki broj (od 1 do N ukljucujuci granice) ispisati sve brojeve od tog broja do 1 (opadajuci redosled)
Primer za N = 9
1
2 1
3 2 1
4 3 2 1
5 4 3 2 1
6 5 4 3 2 1
7 6 5 4 3 2 1
8 7 6 5 4 3 2 1
9 8 7 6 5 4 3 2 1
*/

let N = 9;
let red = ''
for (let i = 1; i <= N; i++) {
    red = red + i + '\n'; 
}
console.log(red);
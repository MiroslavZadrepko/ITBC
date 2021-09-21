/*3. Zadatak (30 poena)
Napisati program koji racuna prosecnu vrednost brojeva izmedju N i M (ukljucujuci N i ne ukljucujuci M):
1. Prosecna vrednost svih brojeva (40% poena)
2. Prosecna vrednost brojeva koji sadrze cifru 2 (60% poena)
let N = 194
let M = 3
Prosek svih brojeva je: 98.
Prosek brojeva sa cifrom 2 je: 88.
*/

let N = 194;
let M = 3;
let T;
let zbir = 0;
let prosek = 0;
let brojBrojeva

if (N > M) {
    T = N;
    N = M;
    M = T;
}
brojBrojeva = M - N
for (; N < M; N++) {
    zbir = zbir + N;
}
prosek = zbir / brojBrojeva;

console.log(`Prosek svih brojeva je ${prosek}`);

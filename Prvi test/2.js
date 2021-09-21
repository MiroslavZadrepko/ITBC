/*2. Zadatak (25 poena)
Napisati program koji ispisuje prikazanu sliku za uneto N (Bez provere za N)
Napomena: Za pola poena ispisati samo DESNI deo slike (ostalo nosi 0 poena)
N = 4 N = 5
******** **********
***  *** ****  ****
**    ** ***    ***
*      * **      **
*      * *        *                       
**    ** *        *
***  *** **      **
******** ***    ***
         ****  ****
         **********
Za pola bodova:
N = 4 N = 5
**** *****
 ***  ****
  **   ***
   *    **
   *     *
  **     *
  ***   **
 ****  ***
      ****
     *****
*/
let N = 5;
let stringZvezda = '*';
let stringPrazan = ' ';
let string = '';

for (let i = 0; i < N; i++) {
    string = stringZvezda.repeat(N-i) + stringPrazan.repeat(i) + stringPrazan.repeat(i) + stringZvezda.repeat(N-i);
    console.log(string);
}

for (let i = N; i > 0; i--) {
    string = stringZvezda.repeat(N-i+1) + stringPrazan.repeat(i-1) + stringPrazan.repeat(i-1) + stringZvezda.repeat(N-i+1);
    console.log(string);
}

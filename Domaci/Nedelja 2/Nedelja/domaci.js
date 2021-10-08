/**--------------------
Nacrtati dijamant kao na primeru:

     *
    ***
   *****
  *******
 *********
  *******
   *****
    ***
     *


 ---------------------*/
 //
let brojPonavljanja = 4;
string = '';
srednjiString = '*';
gornjiDonji = ' '.repeat(brojPonavljanja) + srednjiString;

console.log(gornjiDonji);

for (let i = 1; i <= brojPonavljanja; i++) {
    string = ' '.repeat(brojPonavljanja - i) + srednjiString.repeat(i) + srednjiString.repeat(i+1) + ' '.repeat(brojPonavljanja - i);
    console.log(string);
}
for (let i = 1;  i <= brojPonavljanja+3 ; i++, brojPonavljanja--) {
    string = ' '.repeat(i) + srednjiString.repeat(brojPonavljanja) + srednjiString.repeat(brojPonavljanja-1) + ' '.repeat(i);
    console.log(string);
}

// /**
//  * 1. Napisati funkciju koja vraca najduzi palindrom u datom stringu.
// Napomena: nije potrebno da se ispituje da li je uneti string palindrom, neka se podrazumeva da jeste
// Primer: "HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"
// Ispis: "12345678987654321"
//  */

function okretanje (string) {
  let obrnuti = string.split("").reverse().join("");
  return string == obrnuti;
}

function najduziPalindrom(string) {

  let duzina = 0;
  let najduzi = '';

  for (let i = 0; i < string.length; i++) {
    let kraciString = string.substr(i, string.length);

    for (let j = kraciString.length; j >= 0; j--) {
      let josKraciString = kraciString.substr(0, j);
      if (josKraciString.length <= 1)
        continue;

      if (okretanje(josKraciString)) {
        if (josKraciString.length > duzina) {
          duzina = josKraciString.length;
          najduzi = josKraciString;
        }
      }
    }
  }

  return najduzi;
}
console.log(najduziPalindrom("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"));

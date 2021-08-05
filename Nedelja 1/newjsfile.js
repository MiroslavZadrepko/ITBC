
// Data su 4 stringa. 
let string1 = "neki prvi string"
let string2 = "neki drugi string koji je i duzi string"
let string3 = "neki treci string koji je dugacak"
let string4 = "neki cetvrti"

//1. Proveriti koji je string najduzi i ispisati samo njega

let string1duzina = string1.length;
let string2duzina = string2.length;
let string3duzina = string3.length;
let string4duzina = string4.length;

{
    if (string1duzina > string2duzina && string1duzina > string3duzina && string1duzina > string4duzina) {
        console.log(`1. zadatak: najduži string je string 1 koji glasi: ${string1}`);
    } else if (string2duzina > string3duzina && string2duzina > string4duzina) {
        console.log(`1. zadatak: najduži string je string 2 koji glasi: ${string2}`);
    } else if (string3duzina > string4duzina) {
        console.log(`1. zadatak: najduži string je string 3 koji glasi: ${string3}`);
    } else {
        console.log(`1. zadatak: najduži string je string 4 koji glasi: ${string4}`);
    }
}
//2. Ispisati najkraci string koji sadrzi rec "string"

{
    if (string1.includes("string")) {
        if (string2.includes("string")) {
            if (string1duzina < string2duzina) {
                if (string3.includes("string")) {
                    if (string1duzina < string3duzina) {
                        if (string4.includes("string")) {
                            if (string1duzina < string4duzina) {
                                console.log(`Zadatak 2: string 1 je najkraći string koji sadrži reč "string"`);
                            } else {
                                console.log(`Zadatak 2: string 4 je najkraći string koji sadrži reč "string"`);
                            }
                        } else {
                            console.log(`Zadatak 2: string 1 je najkraći string koji sadrži reč "string"`);
                        }
                    }
                } else if (string4.includes("string")) {
                    if (string1duzina < string4duzina) {
                        console.log(`Zadatak 2: string 1 je najkraći string koji sadrži reč "string"`);
                    } else {
                        console.log(`Zadatak 2: string 4 je najkraći string koji sadrži reč "string"`);
                    }
                } else {
                    console.log(`Zadatak 2: string 1 je najkraći string koji sadrži reč "string"`);
                }
            } else if (string3.includes("string")) {
                if (string2duzina < string3duzina) {
                    if (string4.includes("string")) {
                        if (string2duzina < string4duzina) {
                            console.log(`Zadatak 2: string 2 je najkraći string koji sadrži reč "string"`);
                        } else {
                            console.log(`Zadatak 2: string 4 je najkraći string koji sadrži reč "string"`);
                        }
                    } else {
                        console.log(`Zadatak 2: string 2 je najkraći string koji sadrži reč "string"`);
                    }
                } else if (string4.includes("string")) {
                    if (string3duzina < string4duzina) {
                        console.log(`Zadatak 2: string 3 je najkraći string koji sadrži reč "string"`);
                    } else {
                        console.log(`Zadatak 2: string 4 je najkraći string koji sadrži reč "string"`);
                    }
                } else {
                    console.log(`Zadatak 2: string 3 je najkraći string koji sadrži reč "string"`);
                }
            } else if (string4.includes("string")) {
                if (string2duzina < string4duzina) {
                    console.log(`Zadatak 2: string 2 je najkraći string koji sadrži reč "string"`);
                } else {
                    console.log(`Zadatak 2: string 4 je najkraći string koji sadrži reč "string"`);
                }
            } else {
                console.log(`Zadatak 2: string 2 je najkraći string koji sadrži reč "string"`);
            }
        } else if (string3.includes("string")) {
            if (string1duzina < string3duzina) {
                if (string4.includes("string")) {
                    if (string1duzina < string4duzina) {
                        console.log(`Zadatak 2: string 1 je najkraći string koji sadrži reč "string"`);
                    } else {
                        console.log(`Zadatak 2:string 4 je najkraći string koji sadrži reč "string"`);
                    }
                } else {
                    console.log(`Zadatak 2: string 1 je najkraći string koji sadrži reč "string"`);
                }
            } else if (string4.includes("string")) {
                if (string3duzina < string4duzina) {
                    console.log(`Zadatak 2: string 3 je najkraći string koji sadrži reč "string"`);
                } else {
                    console.log(`Zadatak 2: string 4 je najkraći string koji sadrži reč "string"`);
                }
            } else {
                console.log(`Zadatak 2: string 3 je najkraći string koji sadrži reč "string"`);
            }
        } else if (string4.includes("string")) {
            if (string1duzina < string4duzina) {
                console.log(`Zadatak 2: string 1 je najkraći string koji sadrži reč "string"`);
            } else {
                console.log(`Zadatak 2: string 4 je najkraći string koji sadrži reč "string"`);
            }
        } else {
            console.log(`Zadatak 2: string 1 je najkraći string koji sadrži reč "string"`);
        }
    } else if (string2.includes("string")) {
        if (string3.includes("string")) {
            if (string2duzina < string3duzina) {
                if (string4.includes("string")) {
                    if (string2duzina < string4duzina) {
                        console.log(`Zadatak 2: string 2 je najkraći string koji sadrži reč "string"`);
                    } else {
                        console.log(`Zadatak 2: string 4 je najkraći string koji sadrži reč "string"`);
                    }
                } else {
                    console.log(`Zadatak 2: string 2 je najkraći string koji sadrži reč "string"`);
                }
            } else if (string4.includes("string")) {
                if (string3duzina < string4duzina) {
                    console.log(`Zadatak 2: string 3 je najkraći string koji sadrži reč "string"`);
                } else {
                    console.log(`Zadatak 2: string 4 je najkraći string koji sadrži reč "string"`);
                }
            } else {
                console.log(`Zadatak 2: string 3 je najkraći string koji sadrži reč "string"`);
            }
        }
    } else if (string3.includes("string")) {
        if (string4.includes("string")) {
            if (string3duzina < string4duzina) {
                console.log(`Zadatak 2: string 3 je najkraći string koji sadrži reč "string"`);
            } else {
                console.log(`Zadatak 2: string 4 je najkraći string koji sadrži reč "string"`);
            }
        } else {
            console.log(`Zadatak 2: string 3 je najkraći string koji sadrži reč "string"`);
        }
    }
}

//3. sastaviti sve stringove bez prve reci "neki" osim ako string sadrzi deo recenice "string koji je", takve stringove izostaviti

let noviString

{
    if (!string1.includes("string koji je")) {
        string1 = string1.replace("neki ", "");
        noviString = string1;
    } else { noviString = noviString; }

    if (!string2.includes("string koji je")) {
        string2 = string2.replace("neki ", "");
        noviString = noviString + string2;
    } else { noviString = noviString; }

    if (!string3.includes("string koji je")) {
        string3 = string3.replace("neki ", "");
        noviString = noviString + string3;
    } else { noviString = noviString; }

    if (!string4.includes("string koji je")) {
        string4 = string4.replace("neki ", "");
        noviString = noviString + string4;
    } else { noviString = noviString; }

    console.log(`3.zadatak: ${noviString}`);
}

//SA CASA ZADACI

//1. Na osnovu kolicine i cene artikla ispisati ukupnu cenu
//Kolicina je zadata u gramima
//cena je zadata po kilogramu

//2. Dopuniti 4. zadatak sa casa kolicinom novca, i ispisati racun (ako nema dovoljno novca ispisati poruku)

{
    let kolicina = 350;
    let cena = 12000;
    let ukupnaCena = kolicina * (cena / 1000);
    let kolicinaNovca = 11500;

    if (kolicinaNovca < ukupnaCena) {
        console.log('Zadaci sa časa: Nemaš para');
    } else {
        console.log(`Zadaci sa časa: Račun iznosi ${ukupnaCena}`);
    }

}
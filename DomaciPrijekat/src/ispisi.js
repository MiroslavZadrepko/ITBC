let procSkraceno;

function ispisSaldo(saldo, ukupanPrihod, ukupanRashod) {
    saldo = ukupanPrihod - ukupanRashod;
    let locSaldo = saldo.toLocaleString()
    document.querySelector(`.saldo`).innerHTML = `${locSaldo}`
}

function ispisZeleno(ukupanPrihod) {
    let locUkupanPrihod = ukupanPrihod.toLocaleString()
    document.querySelector(".zeleno").innerHTML = `+ ${locUkupanPrihod} <font size="1" style="visibility: hidden; background-color: rgb(252, 167, 167); margin:4px; padding:4px; border-radius:5px;"> 00.00%</font>`
}

function ispisCrveno(procenat, ukupanPrihod, ukupanRashod) {
    if (ukupanPrihod == 0) { procenat = 0; }
    else { procenat = (100 * ukupanRashod) / ukupanPrihod; }
    procSkraceno = procenat.toFixed(2);
    let locUkupanRashod = ukupanRashod.toLocaleString()
    document.querySelector(".crveno").innerHTML = ` - ${locUkupanRashod} <font size="1" style="background-color: rgb(252, 167, 167); margin:4px; padding:4px; border-radius:5px;"> ${procSkraceno}% </font>`
    return procSkraceno;
}

export { procSkraceno, ispisSaldo, ispisZeleno, ispisCrveno };



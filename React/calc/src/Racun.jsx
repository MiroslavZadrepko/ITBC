const Racun = (rezultat, setRezultat, broj, simbol, nizBrojevaiOperacija, setnizBrojevaiOperacija) => {

    if (simbol == `+`) { rezultat == 0 ? setRezultat(broj) : setRezultat(Number(rezultat) + Number(broj)) }
    else if (simbol == `-`) { rezultat == 0 ? setRezultat(broj) : setRezultat(Number(rezultat) - Number(broj)) }
    else if (simbol == `*`) { rezultat == 0 ? setRezultat(broj) : setRezultat(Number(rezultat) * Number(broj)) }
    else if (simbol == `/`) { rezultat == 0 ? setRezultat(broj) : setRezultat(Number(rezultat) / Number(broj)) }

    let copyNizBrojevaiOperacija = [...nizBrojevaiOperacija]
    copyNizBrojevaiOperacija.push(simbol)
    copyNizBrojevaiOperacija.push(broj)
    setnizBrojevaiOperacija(copyNizBrojevaiOperacija)
}

export default Racun;
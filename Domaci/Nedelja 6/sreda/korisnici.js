class Korisnik {
    static registrovanikorisnici = []
    constructor() {
        this.ime = ime;
        this.sifra = sifra
    }
}

class Kupac extends Korisnik {
    #korpa
    constructor(ime, sifra) {
        super(ime, sifra)
        this.korpa = []
    }
    get korpa() {
        return this.korpa
    }
    dodajUKorpu() {

    }
    brisiIzKorpe() {

    }
}

class Admi extends Korisnik {
    constructor(ime, sifra) {
        super(ime, sifra)
    }

}
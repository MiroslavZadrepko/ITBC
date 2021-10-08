class Proizvod {
    static proizvodi = []
    constructor(naziv, cena, stanje) {
        this.naziv = naziv
        this.cena = cena
        this.stanje = stanje
    }
    toString() {
        return `${this.naziv}, ${this.cena}, ${this.stanje}`
    }
    static addToDOM() {
        const div = document.createElement(`div`)
        return div
     }
}

class PrehrambeniProizvod extends Proizvod {
    constructor(naziv, cena, stanje, rokTrajanja) {
        super(naziv, cena, stanje)
        this.rokTrajanja = rokTrajanja
    }
    toString() {
        return super.toString() + ` ,${this.rokTrajanja}`
    }
}

class BelaThenika extends Proizvod {
    constructor(naziv, cena, stanje, garancija){
        super(naziv, cena, stanje)
        this.garancija = garancija
    }
    return super.toString() + ` ,${this.garancija}`
}
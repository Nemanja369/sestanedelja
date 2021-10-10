class Proizvod{
    static proizvodi = []
    naziv
    cena
    stanje
    constructor(naziv, cena, stanje){
        this.naziv = naziv
        this.cena = cena
        this.stanje = stanje
    }
}
class PrehrambeniProizvodi extends Proizvod {
    rokTrajanja
    constructor(naziv, cena, stanje, rokTrajanja){
        super(nziv)
    }
}
class BelaTehnika extends Proizvod {
    
}
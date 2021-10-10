let forma = document.querySelector('#forma')
let userNameInput = document.querySelector('#username')
let passwordInput = document.querySelector('#password')

let korisnici = []

class Kupac {
    constructor(ime, sifra, korpa){
        this.ime = ime
        this.sifra = sifra
        this.korpa = korpa
    }
}



class Proizvod {
    constructor(naziv, cena, dostupnaKolicina){
        this.naziv = naziv
        this.cena = cena
        this.dostupnaKolicina = dostupnaKolicina
        this.proizvodi = []
    }
   
}

class Prehrambeni extends Proizvod {
    constructor(naziv, cena, dostupnaKolicina, roktrajanja){
        super(naziv, cena, dostupnaKolicina)
        this.roktrajanja = roktrajanja
    }
    create(){
        let proizvod =  document.createElement('div')
        proizvod.innerHTML = `
       
        <p>Naziv: ${super.naziv}</p>
        <p>Cena: ${super.cena}</p>
        <p>Rok trajanja: ${this.roktrajanja}</p>
        <input type="number" name="" id="kolicina">
        `
        let btnDodaj = document.createElement('button')
        btnDodaj.textContent = 'Dodaj'
    }
}
class Belatehnika extends Proizvod {
    constructor(naziv, cena, dostupnaKolicina, garancija){
        super(naziv, cena, dostupnaKolicina)
        this.garancija = garancija
    }
}
forma.addEventListener('submit', ()=>{
    let proizvod = new Prehrambeni()
    create()
})
let niz = []

class Osoba {
    constructor(ime, prezime){
        this.ime = ime;
        this.prezime = prezime;
    }
    static predstaviSe(){
        console.log( this.ime + this.prezime )
    }
}

class Profesor extends Osoba {
    constructor(ime, prezime, jmbg, predmet){
    super(ime, prezime);
    this.jmbg = jmbg;
    this.predmet = predmet;
    }
}

class Student extends Osoba {
    constructor(ime, prezime, brIndeksa){
        super(ime, prezime);
        this.brIndeksa = brIndeksa
    }
    static predstaviSe(){
        console.log(this.ime + this.prezime + this.brIndeksa)
    }
}
let st1 = new Student('Marko','Markovic','123')
console.log(st1)
console.log()
class Korisnik {
    username
    password
    constructor(username,password){
        this.username =  username
        this.password = password
    }
}
class Kupac extends Korisnik{
    #korpa
    constructor(username, password){
        super(username, password)
            this.#korpa = []
    }
    get korpa(){
        return this.#korpa
    }
    dodajUKorpu(){

    }
    obrisiIzKorpe(){

    }
}
class Admin extends Korisnik{
    constructor(){

    }
    kreirajNoviProizvod(){

    }
}
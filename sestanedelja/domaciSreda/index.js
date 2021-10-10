import { Korisnik,Kupac,Admin } from "./korisnici.js";
import { Proizvod,PrehrambeniProizvod,BelaTehnika } from "./proizvodi.js";

Korisnik.registrovaniKorisnici.push(new Kupac('ana','123'),new Admin('admin','1'))
console.log(Korisnik.registrovaniKorisnici)

Proizvod.proizvodi.push(new PrehrambeniProizvod('mleko',200,3,'1.3.2021'), new BelaTehnika('sporet',30000,4,5))
Proizvod.proizvodi.forEach(proizvod => console.log(proizvod.toString()) )


const divKorisnik = document.querySelector('#korisnik')
const divProizvodi = document.querySelector('.proizvodi')
const formaLogIn = document.querySelector('#forma')
const inputUsername = document.querySelector('#username')
const inputPass = document.querySelector('#password')

divProizvodi.append(Proizvod.addProizvodeToDOM())
formaLogIn.addEventListener('submit',(event)=>{
    event.preventDefault()

    let ulogovaniKorisnik =  Korisnik.registrovaniKorisnici.find(korisnik => korisnik.username == inputUsername.value && korisnik.password == inputPass.value)

    if(ulogovaniKorisnik){
        divKorisnik.append(ulogovaniKorisnik.addKorisnikToDOM())    
        // console.log(ulogovaniKorisnik)
        divProizvodi.append(Proizvod.addProizvodeToDOM(ulogovaniKorisnik))
    }else{
        console.log('Ne postoji korisnik sa takvim podacima')
    }
  
})


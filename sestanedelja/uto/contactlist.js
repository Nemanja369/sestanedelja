// class Contact {
//     constructor(phone, email){
//         this.phone = phone;
//         this.email = email;
//     }
//     get phone(){
//         return this.phone
//     }
//      display(){
//         console.log(this.email, this.phone)
//     }
//     contains(){

//     }
// }
// let cont1 = new Contact ('999', 'mail')

// console.log(cont1)
// cont1.display()

// class ContactList {
//     constructor(){
//         this.contacts = []
//     }
//     addContact(el){
//         this.contacts.push(el)
//     }
//     listAllContacts(){
//         this.contscts.forEach(el => {
//             console.log(el)
//         });
//     }
// }
// class CustomerContact extends Contact {
//     constructor(fisrtName, lastName, phone, email){
//         super(phone, email)  //super.display()
//         this.fisrtName = fisrtName;
//         this.lastName = lastName;
//     }
// }
// class BusinessContact extends Contact {
//     constructor(companyName, address, phone, email){
//         super(phone, email)
//         this.companyName = companyName;
//         this.address = address;
//     }
// }
//
class Contact {
    constructor(phone, email) {
        this.phone = phone
        this.email = email
        this.callNum = 0
    }

    display() {
        return `Contact: ${this.phone} , ${this.email}, ${this.callNum}`
    }
    contains(text) {
        return Object.values(this).some(c => c.includes(text))
        // return this.phone.includes(text) || this.email.includes(text)
    }
    call() {
        this.callNum++
    }
}



class CustomerContact extends Contact {
    constructor(phone, email, firstName, lastName) {
        super(phone, email)
        this.firstName = firstName
        this.lastName = lastName
    }

    display() {
        console.log(`CustomerContact: ${super.display()}, ${this.firstName}, ${this.lastName}`);
    }

    // contains(text){
         //return super.contains(text) || this.firstName.includes(text) || this.lastName.includes(text)
    // }
}

class BusinessContact extends Contact {
    constructor(phone, email, companyName, addres) {
        super(phone, email)
        this.companyName = companyName
        this.addres = addres
    }

    display() {
        console.log(`BusinessContact: ${super.display()} ,${this.companyName}, ${this.addres}`);
    }

    // contains(text){
    //     return super.contains(text) || this.companyName.includes(text) || this.addres.includes(text)
    // }
}

class ContactList {

    constructor() {
        this.contacts = []
    }

    addContact(contact) {
        this.contacts.push(contact)
    }

    listAllContacts() {
        this.contacts.forEach(c => c.display())
    }

    searchContacts(text) {
        return this.contacts.filter(c => c.contains(text))
        //filter.forEach(c => c.display())
    }
}


let myList1 = new ContactList()
myList1.addContact(new BusinessContact('+386545668', 'andjela@email.com', 'compName', 'neka adresa'))
myList1.addContact(new CustomerContact('0645354635', 'nekaadr@gmail.com', 'pera', 'peric'))


let c1 = new BusinessContact('112276763', 'probA@email.com', 'name', 'neka adresa')
let c2 = new CustomerContact('063625565', 'adr5465@gmail.com', 'mika', 'kglkjg')
c1.call()
c1.call()
c2.call()
let myList2 = new ContactList()
myList2.addContact(c1)
myList2.addContact(c2)

//console.log(c2.constructor == CustomerContact);
let favourites = new ContactList()
let arr = [...myList1.contacts, ...myList2.contacts].sort((c1, c2) => c2.callNum - c1.callNum)
arr.forEach(contact => favourites.addContact(contact))
//myList1.searchContacts('m').concat(myList2.searchContacts('m')).forEach(contact => favourites.addContact(contact))
favourites.listAllContacts()
let x = document.querySelector('#tbody')

class Product {
    barCode
    title
    price
    group
    constructor(barCode, title, price, group) {
        this.barCode = barCode
        this.title = title
        this.price = price
        this.group = group
    }

}


class ProductGroup {
    title
    vat
    constructor(title, vat) {
        this.title = title
        this.vat = vat
    }
}


class ShoppingCartItem {
    product
    quantity
    constructor(product, quantity) {
        this.product = product
        this.quantity = quantity
    }
}

class ShoppingCart {
    #items
    constructor() {
        this.#items = []
    }
    get items() {
        return this.#items
    }
    addQuantityIfItemExsist(product, quantity) {
        let postoji = false;
        console.log('items: ', this.items)
        this.#items.forEach(it => {
            if (it.product.title == product.title) {
                it.quantity += quantity
                postoji = true
            }
        })
        return postoji;
    }
    addProduct(product, quantity) {
        if (!this.addQuantityIfItemExsist(product, quantity)) {
            let shopingCartItem = new ShoppingCartItem(product, quantity)
            this.#items.push(shopingCartItem)
        }
        console.log(this.#items)
    }
}


class CheckOut {
    printCheck(shopingCart) {

        shopingCart.items.forEach(item => {
           let ispis = document.createElement('tr')
            ispis.innerHTML = `
        <td style="width: 300px;">${item.product.group.title}</td>
        <td style="width: 300px;">${item.product.title}</td>
        <td style="width: 300px;">${item.product.price}</td>
        <td style="width: 300px;">${item.quantity}</td>
        <td style="width: 300px;">${item.product.group.vat}</td>
        <td style="width: 300px;">${item.product.price * item.quantity}</td>`
            x.append(ispis)
            console.log(item.product.group.title, item.product.title, item.product.price, item.quantity, item.product.group.vat, item.product.price * item.quantity)
        })
    }
}

let shopingCart = new ShoppingCart()
shopingCart.addProduct(new Product('111', 'bilosta', 5, new ProductGroup('grupa', 20)), 5)
shopingCart.addProduct(new Product('111', 'bilosta', 5, new ProductGroup('grupa', 20)), 6)
shopingCart.addProduct(new Product('111', 'bilosta2', 5, new ProductGroup('grupa', 20)), 5)

let racun = new CheckOut()

racun.printCheck(shopingCart)


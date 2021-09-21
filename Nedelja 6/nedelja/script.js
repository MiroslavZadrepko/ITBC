class ProductGroup {
    constructor(groupTitle, vat) {
        this.groupTitle = groupTitle
        this.vat = vat
    }
    
    // get groupTitle () {
    //     return this.groupTitle
    // }
    // set groupTitle () { PROVERE SE KONVENCIONALNO OBAVJAJU U SETERIMA!!!
    //    if(typeof groupTitle !== `string` || groupTitle = ``) {
    //        console.log(`mora biti string i da ne bude prazno`);
    //     return 
    //    }
    //    tjis.groupTitle=groupTitle          
    // } 
}

class Product {
    constructor(barCode, pTitle, price, gTitle, vat) {
        this.barCode = barCode
        this.pTitle = pTitle
        this.price = price
        this.group = new ProductGroup(gTitle, vat)
    }
}

class ShopingCartItem {
    constructor(barCode, pTitle, price, gTitle, vat, kolicina) {
        this.proizvod = new Product(barCode, pTitle, price, gTitle, vat)
        this.kolicina = kolicina
    }
}

class ShopingCart {
    constructor(items) {
        this.items = []
    }

    addProduct(jedanItem) {
        korpa.items.forEach(element => {
            if (element.proizvod.pTitle === jedanItem.proizvod.pTitle) {
                jedanItem.kolicina = jedanItem.kolicina + element.kolicina;
                let broj = korpa.items.indexOf(element)
                korpa.items.splice(broj, 1)

            }
        }
        );
        this.items.push(jedanItem);
    }

    checkout(items) {
        let ukupanVat = 0
        let saldo = 0
        for (let i = 0; i < korpa.items.length; i++) {
            let red = document.createElement(`tr`);
            red.style.textAlign = "center"
            red.innerHTML = `

                <td>${korpa.items[i].proizvod.group.groupTitle}</td>
                <td>${korpa.items[i].proizvod.pTitle}</td>
                <td>${korpa.items[i].proizvod.price}</td>
                <td>${korpa.items[i].kolicina}</td>
                <td>${korpa.items[i].proizvod.group.vat}</td>
                <td>${korpa.items[i].proizvod.price * korpa.items[i].kolicina}</td>`

            document.querySelector(`.tbody`).append(red)

            ukupanVat = ukupanVat + korpa.items[i].proizvod.group.vat
            saldo = saldo + korpa.items[i].proizvod.price * korpa.items[i].kolicina
        }

        let suma = document.createElement(`p`)
        suma.innerHTML = `Ukupan porez: ${ukupanVat} <br> Ukupna cena: ${saldo}`
        document.querySelector(`.tbody`).append(suma)
    }
}

let korpa = new ShopingCart();

let mleko = new ShopingCartItem(1, `Mleko`, 100, `Mlecni proizvodi`, 20, 2);
let pavlaka = new ShopingCartItem(2, `Pavlaka`, 50, `Mlecni proizvodi`, 10, 2);
let sok = new ShopingCartItem(2, `Sok od pomorandze 1l`, 120, `Bezalkoholno pice`, 40, 6);
let meso = new ShopingCartItem(2, `Juneci but 1kg`, 800, `Sveze meso`, 30, 0.5);
let cokoloada = new ShopingCartItem(2, `Cokolada Milka 300g`, 280, `Konditori`, 100, 3);

korpa.addProduct(mleko)
korpa.addProduct(pavlaka)
korpa.addProduct(sok)
korpa.addProduct(meso)
korpa.addProduct(cokoloada)

korpa.checkout()
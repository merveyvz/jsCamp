let cart = [
    {id:1, productName: "Telefon", quantity:3, unitPrice: 4000},
    {id:2, productName: "Kalem", quantity:1, unitPrice:30},
    {id:3, productName: "Bardak", quantity:5, unitPrice: 20},
    {id:4, productName: "Şarj Cihazı", quantity:2, unitPrice: 120},
    {id:5, productName: "Kitap", quantity:4, unitPrice: 25},
    {id:6, productName: "Pot", quantity:2, unitPrice: 150}
]


// array i tek tek dolaşır
// product o andaki nesnenin takma adı olur
// => dan sonraki kısım yapılacak işlemi belirtir.
cart.map(product => console.log(product))


console.log("<ul>")
cart.map(product => {  // birden fazla satır olacaksa süslü parantez koy
    console.log("<li> "+product.productName + " : "+ product.unitPrice * product.quantity + " </li>")
})
console.log("</ul>")

// arama yapmak için kullanılır, filtreleme
// => dan sonraki kısım şarttır
//  şarta uyanları array içerisinde döndürür
let quantityOver2 = cart.filter(product => product.quantity>2)

console.log(quantityOver2)

function addToCart(sepet) {
    sepet.push({id:7, productName: "Ruhsat", quantity:1, unitPrice: 20})
}

// matematiksel işlemler
let total = cart.reduce((acc, product) => acc + product.unitPrice * product.quantity, 0);  // 0 acc nin başlangıç değeri
console.log(total)


addToCart(cart)

console.log(cart)

let sayi = 10;

function sayiTopla(number) {
    number+=1
}

sayiTopla(sayi)

console.log(sayi)
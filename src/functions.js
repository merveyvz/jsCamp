<<<<<<< HEAD
function addToCart(productName = "Çilek", quantity) {
   console.log("Sepete Eklendi! " + productName + " Adet: " + quantity) 
}

//addToCart("Elma")
addToCart("Armut", 10)
//addToCart()


//fonksiyonu değişkene atama

let sayHello = (sayi) => {
   console.log("Hello world " + sayi)
}

sayHello(4)

let sayHello2 = function(){
   console.log("Hello world")
}

function addToCart2(productName, quantity, unitPrice) {
   
}

addToCart2("Elma", 5, 10)

let product1 = {productName:"Elma", unitPrice:10, quantity:5}


function addToCart3(product) {
   console.log("Ürün: " + product1.productName)
   console.log("Birim Fiyat: " + product1.unitPrice)
   console.log("Miktar: " + product1.quantity)
=======
function addToCart(quantity,productName="Elma") {
    console.log("Sepete eklendi : ürün : " 
    + productName + " adet : " + quantity)
}

//addToCart()
addToCart(10)
//addToCart(15)

let sayHello = ()=>{
    console.log("Hello World!")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello World 2")
}

sayHello2();

function addToCart2(productName, quantity, unitPrice) {
    
}

addToCart2("Elma",5,10)
addToCart2("Armut", 2, 20)
addToCart2("Limon",3,15)

let product1 = {productName:"Elma", unitPrice:10, quantity:5}

function addToCart3(product) {
    console.log("Ürün : "+product.productName)
    console.log("Adet : "+product.quantity)
    console.log("Fiyat : "+product.unitPrice)
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
}


addToCart3(product1)

<<<<<<< HEAD

//referans tip
let product2 = {productName:"Elma", unitPrice:10, quantity:5}  //101
let product3 = {productName:"Elma", unitPrice:10, quantity:5}  //102

product2 = product3   // 102-102 -> 101 i tutan bir değişken yok artık
product2.productName = "karpuz"  // 102 nin productName i değişti

console.log(product3.productName)
 

//değer tip
let sayi1 = 10
let sayi2 = 20

=======
let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)

let sayi1 = 10
let sayi2 = 20
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)

<<<<<<< HEAD

function addToCart4(products) {
   console.log(products)
}

//function addToCart4(x) {  //bu yine çalışır
//   console.log(products)  //products gönderilmediği için değeri bir üst scope dan alır
//}


let products = [
   {productName:"Elma", unitPrice:10, quantity:5},
   {productName:"Armut", unitPrice:1, quantity:7},
   {productName:"Muz", unitPrice:10, quantity:4}
=======
function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
]

addToCart4(products)

<<<<<<< HEAD
//rest operatörü birleştirir ...  gönderilenleri array yapıp fonksiyona verir

function add(bisey, ...numbers) {    // rest operatörü en sona yazılır
   let total = 0
   for (let i = 0; i < numbers.length; i++) {
      total = total + numbers[i]
      
   }
   console.log(total)
   console.log(bisey)
}


add(20, 30)
add(20,30, 40)

let numbers = [30,40,15,78,2557]

//console.log(numbers)
//console.log(...numbers)  //spread ayrıştırır

console.log(Math.max(...numbers))
//console.log(Math.max(numbers))

//console.log(Math.max(3,10,500,458,721,45))

let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri]] = [
   {name: "İç Anadolu" , population: "20M"}, 
   {name: "Marmara" , population: "50M"}, 
   {name: "Karadeniz" , population: "30M"},
   [
      ["Ankara", "Konya"],
      ["İstanbul", "Bursa"],
      ["Sinop", "Trabzon"]
   ]

]

//console.log(icAnadolu.name)
//console.log(marmara.population)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity

({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} = {productName:"Elma", unitPrice:10, quantity:5})  // atama kod bloğu olarak algılanmasın diye paranteze aldık

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)
=======
function add(bisey,...numbers) { //rest
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
    console.log(bisey)
}

add(20,30)
//add(20,30, 40)
//add(20,30, 40, 50)

let numbers = [30,10,500,600,120]
//console.log(...numbers)
console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]

// console.log(icAnadolu.name)
// console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity } 
= {productName:"Elma", unitPrice:10, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)

>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e

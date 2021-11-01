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
}


addToCart3(product1)


//referans tip
let product2 = {productName:"Elma", unitPrice:10, quantity:5}  //101
let product3 = {productName:"Elma", unitPrice:10, quantity:5}  //102

product2 = product3   // 102-102 -> 101 i tutan bir değişken yok artık
product2.productName = "karpuz"  // 102 nin productName i değişti

console.log(product3.productName)
 

//değer tip
let sayi1 = 10
let sayi2 = 20

sayi1 = sayi2
sayi2 = 100
console.log(sayi1)


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
]

addToCart4(products)

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
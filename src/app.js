<<<<<<< HEAD
console.log("hello world")

//JS type safe değildir

let dolarBugun = 9.32
let dolarDun = 9.20

{
    let dolarDun = 9.10
}

console.log(dolarDun)
const euroDun = 11.2
//euroDun = 11
console.log(euroDun)

//array
//camelCasing
let konutKredileri = ["Konut Kredisi", "Emlak konut kredisi", "kamu komut kredisi", "özel konut kkredileri", "araç kredisi"]

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>" + konutKredileri[i] + "</li>")
    
}
console.log("</ul>")

console.log(konutKredileri)


=======
console.log("Merhaba Kodlama.io")

//JS type safe değildir
let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun = "9.20"
{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11

console.log(euroDun)

//array
//camelCasing
//PascalCasing
let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

{/* <ul>
    <li>Konut kredisi</li>
    <li>Emlak Konut Kredisi</li>
    <li>Kamu Konut Kredisi</li>
</ul> */}

console.log(konutKredileri)
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e

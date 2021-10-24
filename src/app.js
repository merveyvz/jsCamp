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
let konutKredileri = ["Konut Kredisi", "Emlak konut kredisi", "kamu komut kredisi", "özel konut kkredileri"]

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>" + konutKredileri[i] + "</li>")
    
}
console.log("</ul>")

console.log(konutKredileri)

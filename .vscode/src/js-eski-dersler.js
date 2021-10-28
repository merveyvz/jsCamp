let student = {id:1, name:"Merve"}


//defined parametreler sona yazılır, yazmadıysan fonksiyona parametre gönderirken undefined yaz
function save(ogrenci, puan=10) {
    console.log(ogrenci.name + " " + puan)
}

save(student);

let students = ["Engin Demiroğ" ,"Merve Yavuz" ]

//console.log(students)

let students2 = [student, {id:1, name:"Engin Demiroğ"}, "Ankara", {city: "İstanbul"}]
console.log(students2)

let showProducts = function (id, ...products) {  // products arraydir []
    console.log(id)
    console.log(products)
}

showProducts(10, "elma", "armut", "karpuz") // elma armut karpuzu array içinde gönderirsen tek eleman olarak gözükür [[]]


//spread  -> arrayi parçalar
let points = [1,2,3,4,50,4,60,14]
console.log(...points)
console.log(Math.max(...points))

// destructuring -> arrayin elemanlarını değişkenlere atamayı sağlar

let populations = [10000,20000,30000,[40000,50000]]

let [small,medium,high,[veryHigh, maximum]] = populations

console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1], number) {  // gelen arrayin ilk elemanını small1 e ata
    console.log(small1)
}

someFunction(populations)

let category = {id:1, name:"içecek"}
console.log(category.id)
console.log(category["name"])

let {id,name} = category
console.log(id)
console.log(name)

class Customer{
    constructor(id,customerNumber){
        this.id = id
        this.customerNumber = customerNumber
    }
}

let customer = new Customer(1, "12345");

//prototyping
customer.name = "Merve Yavuz"
console.log(customer.name)

Customer.bisey = "bisey"
console.log(Customer.bisey)

console.log(customer.customerNumber)

class IndividualCustomer extends Customer{
    constructor(firstName, id, customerNumber){
        super(id,customerNumber)
        this.firstName=firstName
    }
}

class CorporateCustomer extends Customer{
    constructor(companyName, id, customerNumber){
        super(id,customerNumber)
        this.companyName = companyName
    }

}

let products =[
    {id:1, name: "Acer Laptop", unıtPrice: 15000},
    {id:2, name: "Asus Laptop", unıtPrice: 16000},
    {id:3, name: "Hp Laptop", unıtPrice: 13000},
    {id:4, name: "Dell Laptop", unıtPrice: 12000},
    {id:5, name: "Casper Laptop", unıtPrice: 17000}
]

//map -> array üzerinde gezinmeyi sağlar
console.log("<ul>")
products.map(product => console.log(`<li>${product.name}</li>`))  // tek satırlık işlemler için süslü parateze gerek yok
console.log("</ul>")

products.map(product => {
    console.log(product)
    console.log(`<li>${product.name}</li>`)
})

// filter -> filtreleme yapıp array döndürür

let filteredProducts = products.filter(product => product.unıtPrice>12000)
console.log(filteredProducts)

//reduce

let cartTotal = products.reduce((acc, product) => acc + product.unıtPrice, 0)  // 0 başlan gıç değeri
console.log(cartTotal)

let cartTotal2 = products
                .filter(p => p.unıtPrice > 13000)
                .map(p =>{
                    p.unıtPrice = p.unıtPrice*1.18
                    return p
                    })
                .reduce((acc, p) => acc + p.unıtPrice,0)

console.log(cartTotal2)
                    
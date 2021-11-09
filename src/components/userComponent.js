import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("user component loaded")

// class ı kullanmak için new le
let userService = new UserService()

let user1 = new User(1, "Merve", "Yavuz", "Ankara")
let user2 = new User(2, "Engin", "Demiroğ", "Ankara")

userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(2))





let customer = {id:1, firstName: "Engin"}


//prototyping, js de nesneye sonradan değer ekleyebilirsin
customer.lastName = "Demiroğ"
console.log(customer.lastName)
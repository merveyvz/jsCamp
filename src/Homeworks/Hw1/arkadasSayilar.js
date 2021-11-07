function arkadasMi(num1, num2) {
    let total1 = pozitifBolenlerToplami(num1)
    let total2 = pozitifBolenlerToplami(num2)
    console.log(total1, total2)

    if (total1 == num2 && total2 == num1) {
        console.log(num1 + " ve " + num2 + " arkadaş sayılardır")
    }
    else{
        console.log(num1 + " ve " + num2 + " arkadaş sayılar değildir")
    }

}


function pozitifBolenlerToplami(num) {
    let total = 0;
    for (let i = 1; i <= Math.floor(num/2); i++) {  // pozitif bölenleri bulmak için sayının yarısına kadar kontrol etmek yeterlidir
        if (num % i == 0) {
            total += i
        }
    }
    return total;
}

arkadasMi(1184, 1210)
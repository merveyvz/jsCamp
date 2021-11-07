function pozitifBolenlerToplami(num) {
    let total = 0;
    for (let i = 1; i <= Math.floor(num/2); i++) {  // pozitif bölenleri bulmak için sayının yarısına kadar kontrol etmek yeterlidir
        if (num % i == 0) {
            total += i
        }
    }
    return total;
}

for (let x = 1; x <= 1000; x++) {
    let total = pozitifBolenlerToplami(x)
    if (x == total) {
        console.log(x + " mükemmel sayıdır")
    }
    
}
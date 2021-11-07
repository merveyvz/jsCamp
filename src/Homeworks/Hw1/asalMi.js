function asalMi(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        let asal = true;

        if (number > 2) {  
           for (let x = 2; x <= Math.sqrt(number) + 1; x++) {  //sayıyı bölmeye 2 den başlayacak ve sayıyının karekökünden küçük eşit olduğu sürece devam edecek
            if (number % x == 0) {  // sayı tam bölünüyorsa asal değildir
               asal = false;
               break;
            }  
        } 
        }else if (number < 2) {  // 2 den küçük sayılar asal değildir, 2 asal bir sayıdır
            asal = false;
        }
        
        if (asal) {
            console.log(number + " asal bir sayıdır")
        }
        else{
            console.log(number + " asal bir  sayı değildir")
        }
        
    }
}

asalMi(9, 10, 25, 13, 1, 0, -89, 100, 97,2)
function asalMi(number) {
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
        
        return asal
        
}

for (let i = 0; i <= 1000; i++) {
    let asal = asalMi(i);
    if (asal) {
        console.log(i + " asal sayıdır")
    }
    
}
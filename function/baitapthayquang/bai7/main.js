//function checkNumber(number) {
 //   if (number%2==0) {
//        console.log("Đây là số chẵn");
//    }else{
//        console.log("Đây là số lẻ");
  //  }

//}
//checkNumber(8);

/*let checknumberPrime = (number)=>{
    for (let index = 2; index < Math.sqrt(number) ; index++) {
        if (number%index==0) {
            return "Đây không phải là số nguyên tố";
        }else{
            return "Đây là số nguyên tố"
        }
    }
}
console.log(checknumberPrime(8));*/

let checkNumberPerfect = (number) =>{
    let sum =0;
    let i=1;
    while (i<number) {
        if (number%i==0) {
            sum+=i;
        }
        i++;
    }
    if (sum ==number) {
        return "Đây là số hoàn hảo"
    }else{
        return "Đây không phải là số hoàn hảo"
    }

}
console.log(checkNumberPerfect(13));

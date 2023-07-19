let arr = function(array=[]){
    //max =array[0]
    //for (let index = 1; index < array.length; index++) {
    //    if (max<array[index]) {
    //        max=array[index]
    //    }
    //}
    if (array.length==0) {
        
    }
    array.sort((a,b)=>b-a)
    console.log("Giá trị lớn nhất là: ",array[0]);
}
arr([2,9,34,-4,5]);
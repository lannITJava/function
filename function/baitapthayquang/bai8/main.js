function count(arr) {
    let sum =0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let total = sum/arr.length;
    return total;
}
console.log(count([1,3,3]));

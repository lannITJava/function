function countCentury(years) {
    if (years%100==0) {
        let century = years/100;
        return century;
    } else {
        century = Math.floor(years/100 +1);
        return century;
    }
}
let count = countCentury(+prompt("Nhập vào một năm"));
console.log("Năm thuộc thế kỷ ", count);
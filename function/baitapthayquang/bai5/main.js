
function add(str) {
    let stringUp = str.slice(0, 1).toUpperCase();
    let stringLow = str.slice(1).toLowerCase();
    console.log(stringUp+stringLow);
}
add(prompt("Nhập vào một từ"));
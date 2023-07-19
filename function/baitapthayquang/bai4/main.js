function stringMethod(string) {
    let cutString =string.slice(0, 10);
    let pastString ="...";
    console.log("Chuỗi sau khi cắt: ",cutString+pastString);
}
stringMethod(string=prompt("Nhập vào một chuỗi dài hơn 15 kí tự") );

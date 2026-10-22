function dientich(a, b) {
    return a * b;
}

function chuvi(a, b) {
    return (a + b) * 2;
}
var a = parseInt(prompt("Nhap canh a: "));
var b = parseInt(prompt("Nhap canh b: "));
alert("Dien tich hinh chu nhat la: " + dientich(a, b));
alert("Chu vi hinh chu nhat la: " + chuvi(a, b));
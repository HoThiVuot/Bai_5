function tinhtong() {
    let a = Number(document.getElementById("NbA").value);
    let b = Number(document.getElementById("NbB").value);
    let tong = a + b;
    kq(tong);
}

function pheptru() {
    let a = Number(document.getElementById("NbA").value);
    let b = Number(document.getElementById("NbB").value);
    let tru = a - b;
    kq(tru);
}

function phepnhan() {
    let a = Number(document.getElementById("NbA").value);
    let b = Number(document.getElementById("NbB").value);
    let nhan = a * b;
    kq(nhan);
}

function phepchia() {
    let a = Number(document.getElementById("NbA").value);
    let b = Number(document.getElementById("NbB").value);
    let chia = a / b;
    kq(chia);
}

function kq(Result) {
    document.getElementById("Result").value = Result;
}
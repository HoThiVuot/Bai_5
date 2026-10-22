function Function1() {
    let hk1 = document.getElementById("text_1").value;
    hk1 = parseFloat(hk1);
    let hk2 = document.getElementById("text_2").value;
    hk2 = parseFloat(hk2);
    let diemTB = (hk1 + hk2) / 2;
    let xl = "";
    document.getElementById("result").value = diemTB;
    if (diemTB >= 9) {
        xl = "Xuất sắc";
    } else if (diemTB >= 8) {
        xl = "Giỏi";
    } else if (diemTB >= 7) {
        xl = "Khá";
    } else if (diemTB >= 5) {
        xl = "Trung bình";
    } else {
        xl = "Yếu";
    }
    document.getElementById("ketqua").innerHTML = "Xếp loại: " + xl;
}
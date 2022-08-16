function myFunction() {
    let x = Math.floor(Math.random() * 100);
    var user
    var count = 5;
    do {
        count--
        if (count <= 0){
            alert("Bạn đã hết lượt chơi")
            break;
        }
        user = +prompt("Mời nhập số");
        if (user == x)
            alert("Bạn đã đoán đúng");
        if (user > x)
            alert("Số dự đoán lớn hơn số bí mật")
        if (user < x)
            alert("Số dự đoán nhỏ hơn số bí mật")
    } while (x!= user)

}


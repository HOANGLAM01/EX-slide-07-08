var celsius = +prompt("Mời bạn nhập nhiệt độ mong muốn");
var sugges = null;
if (celsius > 100) {
    sugges = "Quá nóng, mời bạn giảm nhiệt độ";
} else if (celsius < 20) {
    sugges = "Quá lạnh, mời bạn tăng nhiệt độ";
        } else
            sugges = "Good choice";


document.writeln(sugges);



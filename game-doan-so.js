function myFunction() {
    var game = +prompt("Chơi  lại");
    var x = Math.floor(Math.random()*100);
    if (game == x){
        document.writeln("Chúc mừng bạn");
    }else
        document.writeln("Sổ số là: " + x);

}

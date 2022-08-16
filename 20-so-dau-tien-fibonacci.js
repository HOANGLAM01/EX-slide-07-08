var number1 = 1;
var number2 = 1;
var N = number1 + number2;
var count = 1;
var sout = "";
for (number1,number2;count<19; count++) {
    N = number1 + number2;
    number1 = number2;
    number2 = N;
    sout = sout + N + ",";
}
document.writeln("1 , 1 ," + sout);
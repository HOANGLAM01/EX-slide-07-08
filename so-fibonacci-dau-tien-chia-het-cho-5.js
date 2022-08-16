var number1 = 1;
var number2 = 1;
var N = number1 + number2;
var count = 1;
for (number1,number2;count<19; count++) {
    N = number1 + number2;
    if (N%5 != 0) {
        number1 = number2;
        number2 = N;
    } else
        break;
}
document.writeln(N);
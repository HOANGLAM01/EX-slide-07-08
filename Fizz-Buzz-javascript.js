var i = 1;
var N = null;
var sout = "";
for (i;i<=100;i++) {
    if (i%15 ==  0) {
        N= "FizzBuzz";
    }else if(i%5 == 0) {
        N="Buzz";
    } else if (i%3 == 0){
        N= "Fizz";
    }else
        N=i;
    sout = sout + N + ", ";
}
document.writeln(sout);
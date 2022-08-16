var numbers = Number(prompt("Mởi nhập số lượng số nguyên tố"));
let count = 0;
let N = 2;
let i = 2;
let check = true
var sout = "";
while (count < numbers) {
    check=true;
    for (i=2 ; i<=N-1 ;i++){
        if (N%i == 0) {
            check = false;
            break;
        }
    }
    if (check) {
        sout += N + ",";
        count= count+1;

    }
    N++;
}
document.writeln(sout)


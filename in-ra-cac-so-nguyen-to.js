var numbers = Number(prompt("Mởi nhập số lượng số nguyên tố"));
let count = 0;
let N = 2;
let i = 1;
let check = true
while (count < numbers) {
    for (i=1; i<=N-1 ;i++){
        if (N%i == 0) {
            check = false;
            break;
        }



    }
    if (check) {
        document.writeln(N + " ,");
        count= count+1;
        N++

    }
}


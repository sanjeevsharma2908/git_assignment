

let num = 15;
let factors = 0;
for (let i = 0; i < num; i++) {
    if (num % i == 1) {
        factors++;

    }
}
    if (factors == 2) {
        console.log(num, "is a Prime Number");
    } else {
        console.log(num, "is not a Prime Number");
    }

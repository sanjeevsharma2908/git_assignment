
let str = "abca";
let rev = 0;
for (let i= str.length - 1; i >= 0; i--) {
    rev = rev + str[i];
}
if (rev == str) {
    console.log(str, "is palindrome");
} else {
    console.log(str, "is not palindrome");
}
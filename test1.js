//level 1
//print a message
console.log("Hello javascript");
//add two number
let a = 10;
let b = 20;
let sum = a + b;
console.log(sum);
//even or odd
let c = 25;

console.log(c % 2 === 0 ? "Even" : "Odd");
// or
let d = 7;

if (d % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
//find the bigger number
let x = 25;
let y = 35;
console.log(Math.max(x, y));
//posttive,negative,zero
let num = 85;
if (num > 0) {
  console.log("positive num");
} else if (num < 0) {
  console.log("negative num");
} else {
  console.log("zero");
}

//LEVEL2 LOOPS
//print number 1to10using loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
//sum of number 1 to 100;
let sum1 = 0;
for (let i = 1; i <= 100; i++) sum1 = sum1 + i;
{
  console.log(sum1);
}
//
//print even number
let num3 = 25;
if (num3 % 2 == 0) {
  console.log("is even number ");
} else {
  console.log("is odd number ");
}
// factorial
let factorial = 1;
for (i = 5; i >= 1; i--) {
  factorial = factorial * i;
  console.log(factorial);
}

//LEVEL 3 -STRINGS
//reverse a string
let str = "HELLO";
let reverse = str.split("").reverse().join("");
console.log(reverse);
//count vovels
let str1 = "HELLO";
let vovel = { a, e, i, o, u };
if (str1 == vovel) {
  console.log("matching vovel");
} else {
  console.log("unmatching vovel");
}
//check palindrome
let str3 = madam;
let reverse1 = "";
for (i = str3.length - 1; i <= 0; i--) {
  reverse1 = reverse1 + str[i];
}
if (str3 == reverse1) {
  console.log("palindrome number");
} else {
  console.log("not a palindrome number");
}
//count character

let str4 = "hemukaka";
{
  console.log(str4.length);
}

//functions
//addition function

function add(k1, k2) {
  return k1 + k2;
}
console.log(add(5, 10));

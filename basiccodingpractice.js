//JavaScript Basic Coding Round — Level 1
//1 se 10 tak numbers print karo
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// 1 se 100 tak numbers ka sum nikalo
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}

console.log(sum);
//Check karo number even hai ya odd
let x = 25;
if (x % 2 === 0) {
  console.log("this is even number ");
} else {
  console.log("this is odd number ");
}
//3 numbers mein largest number find karo
let p = 12;
let q = 25;
let r = 30;
let largest = p;
if (q > largest) {
  largest = q;
}
if (r > largest) {
  largest = r;
}
console.log(largest);
//Number ka factorial nikalo
let number = 5;
let factorial = 1;
for (let i = 1; i <= number; i++) {
  factorial = factorial * i;
}
console.log(factorial);
//String ko reverse karo
let str = "kundan";
let reverse = "";

for (let i = str.length - 1; i >= 0; i--) {
  reverse = reverse + str[i];
}

console.log(reverse);

//Check karo string palindrome hai ya nahi

let str1 = "level";
let reverse1 = "";

for (let i = str1.length - 1; i >= 0; i--) {
  reverse1 = reverse1 + str1[i];
}
if (str1 === reverse1) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}

//Array mein largest number find karo
let arr = [2, 5, 8, 0, 6];
let largest1 = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > largest1) {
    largest1 = arr[i];
  }
}
console.log(largest1);
//Array ke saare numbers ka sum nikalo
let arr2 = [2, 5, 8, 0, 6];
let sum1 = 0;
for (let i = 1; i < arr2.length; i++) {
  sum1 = sum1 + arr2[i];
}
console.log(sum1);

//Array mein even numbers count karo
let arr3 = [2, 5, 8, 0, 6];
let even = 0;
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] % 2 === 0) {
    even++;
  }
}
console.log(even);

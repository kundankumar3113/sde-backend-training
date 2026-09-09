//Array mein even numbers count kare
let arr2 = [2, 5, 8, 0, 6];
let even = 0;
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] % 2 === 0) {
    even++;
  }
}
console.log(even);

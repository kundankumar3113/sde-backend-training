// 1 se 10 tak numbers print karo

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//1 se 20 tak sirf even numbers print karo.

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) console.log(i);
}

// 10 se 1 tak numbers reverse order mein print karo.

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// while loop::::==== 1 se 10 tak numbers print karo using while
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
//1 se 20 tak numbers mein se sirf odd numbers print karo
let j = 1;
while (j <= 20) {
  if (j % 2 !== 0) console.log(j);
  j++;
}

//1 se 5 tak numbers print karo using do...while
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);

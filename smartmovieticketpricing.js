let basePrice = 20;
let age = 85;
let isStudent = true;
let isVip = false;
let isweekend = true;
let hascoupon = true;
let discountpercentage = 0;
let seniorDiscount = 0;
let studentDiscount = 0;
let vipDiscount = 0;

if (age < 5) {
  discountpercentage = 100;
} else {
  if (age >= 65) {
    if (isweekend && isVip) {
      seniorDiscount = 60;
    } else seniorDiscount = 50;
  }
}
if (isStudent && age >= 5 && age <= 24) {
  if (isweekend) {
    studentDiscount = 25;
  } else if (hascoupon) {
  }
}
if (isVip) {
  vipDiscount = 30;
}
discountpercentage = Math.max(seniorDiscount, studentDiscount, vipDiscount);
let finalPrice = basePrice * (1 - discountpercentage / 100);
console.log("discount applied:", discountpercentage + "%");
console.log("Final Price:", finalPrice);

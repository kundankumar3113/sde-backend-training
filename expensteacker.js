// expense tracker

let expenses = [
  { category: "Food", amount: 500 },
  { category: "Travel", amount: 1200 },
  { category: "Petrol", amount: 2000 },
  { category: "Clothing", amount: 1500 },
  { category: "Food", amount: 800 },
  { category: "Petrol", amount: 1000 },
  { category: "Travel", amount: 700 },
];
let totalExpenses = 0;

for (let expense of expenses) {
  totalExpenses = totalExpenses + expense.amount;
}

console.log("Total Expenses:", totalExpenses);

let categoryWiseExpenses = {};

for (let expense of expenses) {
  if (!categoryWiseExpenses[expense.category]) {
    categoryWiseExpenses[expense.category] = 0;
  }
  categoryWiseExpenses[expense.category] =
    categoryWiseExpenses[expense.category] + expense.amount;
}

console.log("Category-wise Expenses:", categoryWiseExpenses);

let highsetExpenseCategory = null;
let highestExpenseAmount = 0;

for (let category in categoryWiseExpenses) {
  if (categoryWiseExpenses[category] > highestExpenseAmount) {
    highestExpenseAmount = categoryWiseExpenses[category];
    highsetExpenseCategory = category;
  }
}
console.log("Highest Expense Category:", highsetExpenseCategory);
console.log("Highest Expense Amount:", highestExpenseAmount);

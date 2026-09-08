//push
let arr = [1, 2, 3];
arr.push(4);
console.log(arr);

//pop
let arr1 = [1, 2, 3, 4];
arr1.pop();
console.log(arr1);

//shift
let arr2 = [1, 2, 3, 4];
arr2.shift();
console.log(arr2);

//unshift
let arr3 = [2, 3, 4];
arr3.unshift(15);
console.log(arr3);

//splice
let arr4 = [1, 2, 3, 4, 5];
arr4.splice(2, 1);
console.log(arr4);
//slice
let arr5 = [1, 2, 3, 4, 5];
let newArr = arr5.slice(1, 4);
console.log(newArr);

//forEach
let arr6 = [1, 2, 3, 4, 5];
arr6.forEach(function (element) {
  console.log(element);
});
//map
let arr7 = [1, 2, 3, 4, 5];
let newArr2 = arr7.map(function (element) {
  return element * 2;
});
console.log(newArr2);

//filter
let arr8 = [1, 2, 3, 4, 5];
let filteredArr = arr8.filter(function (element) {
  return element > 2;
});
console.log(filteredArr);

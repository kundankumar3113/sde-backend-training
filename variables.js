// difference between var, let and const in JavaScript

// var:
// - global-scoped
// - Can be redeclared and updated
// - Hoisted to the top of its scope
// - Can lead to unexpected behavior due to hoisting and scope issues

// let
// - Block-scoped
// - Cannot be redeclared in the same scope
// - Not hoisted to the top of its scope
// - Must be declared before use

// const
// - Block-scoped
// - Cannot be redeclared or updated
// - Not hoisted to the top of its scope
// - Must be initialized at the time of declaration

// Example:
//var age = 26;

//console.log(age);

//let a = "26";
//let b = 26;
//console.log(a - b);

//console.log(null == undefined);

//console.log(age);
//var age = 28;

//console.log(age);  // hoisting example
//let age = 30;

//var age = 26; //re-declaration and re-assignment is allowed with var

//age = 27;

//console.log(age);

///const name = "kundan"; //re-declaration and re-assignment is not allowed with const

//name = "kundankumar"; // This will throw an error

// 1. VAR - Declaration + Reassignment

var age = 26;

console.log("Initial age:", age);

age = 27;

console.log("After reassignment:", age);

// 2. VAR - Redeclaration

var city = "Begusarai";

var city = "Patna";

console.log("City after redeclaration:", city);

// 3. LET - Reassignment

let score = 10;

console.log("Initial score:", score);

score = 20;

console.log("After reassignment:", score);

// 4. CONST

const country = "India";

console.log("Country:", country);

// 5. BLOCK SCOPE - LET

{
  let blockName = "Inside Block";

  console.log("let inside block:", blockName);
}

//console.log("let outside block:", blockName);

// 6. BLOCK SCOPE - VAR

{
  var blockCity = "Patna";

  console.log("var inside block:", blockCity);
}

console.log("var outside block:", blockCity);

// 7. FUNCTION SCOPE

function testFunction() {
  var functionVariable = "I am inside function";

  console.log(functionVariable);
}

testFunction();

// 8. HOISTING - VAR

console.log("Hoisted var:", hoistedVar);

var hoistedVar = 100;

// 9. CONST + OBJECT

const person = {
  name: "Kundan",
  age: 26,
};

console.log("Person before change:", person);

person.age = 27;

console.log("Person after changing age:", person);

// 10. NESTED SCOPE

let outerVariable = "Outer";

{
  let innerVariable = "Inner";

  console.log("Outer variable:", outerVariable);
  console.log("Inner variable:", innerVariable);
}

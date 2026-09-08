// function greet() banao jo:
function greet() {
  console.log("Hello, World!");
}
greet();

//Ek function add() banao jo do numbers ko add kare.
function add(num1, num2) {
  return num1 + num2;
}
console.log(add(5, 10));

//return
function abcd() {
  return 12;
}

console.log(abcd());

//return statement ke baad koi bhi code execute nahi hota hai.
function testReturn() {
  console.log("Before return");
  return 5;
  console.log("After return"); // This will not be executed
}

//function firstClassFunction() banao jo ek string ko print kare.
function firstClassFunction() {
  console.log("This is a first-class function.");
}

//higher order function : woh function jo ya to ek function ko argument ke roop me le sakta hai ya fir ek function ko return kar sakta hai.
function higherOrderFunction(callback) {
  console.log("Before calling the callback function");
  callback();
  console.log("After calling the callback function");
}

higherOrderFunction(firstClassFunction);

// pure vs impure function: pure function woh function hai jo same input ke liye hamesha same output deta hai aur koi side effect nahi hota. Impure function woh function hai jo ya to same input ke liye alag output deta hai ya fir koi side effect hota hai.
// pure function
function pureFunction(a, b) {
  return a + b;
}
callback(pureFunction(2, 3));
// impure function
let counter = 0;
function impureFunction() {
  counter++;
  return counter;
}
callback(impureFunction());
callback(impureFunction());

//parameter aur argument: parameter woh variable hai jo function ke definition me hota hai, jabki argument woh value hai jo function ko call karte waqt pass ki jati hai.
let k = 5;
function parameterFunction(abcd) {
  console.log(abcd);
}
parameterFunction(k);

argumentFunction(10);
function argumentFunction(num) {
  console.log(num);
}
argumentFunction(20);

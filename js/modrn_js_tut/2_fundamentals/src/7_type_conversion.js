

let value = true;
console.log(typeof value);

value = String(value);  // now variable is string (dynamic typing)
console.log(typeof  value);

console.log( '6' / '7') // strs converted to numbers on fly

let str = "123";
console.log(typeof str); // string

let num = Number(str); // becomes a number 123

console.log(typeof num); // number

//example of failed converions
let age = Number("an arbitrary string instead of a number");

console.log(age); // NaN, conversion failed

//boolean conversions
console.log( Boolean(1) ); // true
console.log( Boolean(0) ); // false

console.log( Boolean("hello") ); // true
console.log( Boolean("") ); // false
console.log(1 / 0); //infinity

console.log(Infinity);

console.log('string' / 2); //Nan

//number
let n = 123; //int
n = 12.345;  //double  dynamically typed

//bigint
// this two numbers are the same
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

// string
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

let name = "John";

// embed a variable
console.log( `Hello, ${name}!` ); // Hello, John!


let age = null;

console.log(age);

age = undefined;
console.log(age);

//object type is special

console.log(typeof(undefined));
console.log(typeof(0))  //number
console.log(typeof(0.1)) //number
console.log(typeof(1234567890123456789012345678901234567890n)); //bigint

console.log(typeof true); // "boolean"

console.log(typeof "foo"); // "string"

console.log(typeof Symbol("id")); // "symbol"

console.log(typeof Math); // "object"  (1)

console.log(typeof null); // "object"  (2)

console.log(typeof(console)); // "function"  (3)

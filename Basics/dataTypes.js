"use strict"; //treat all JS code as newer version.

//alert("hello"); //Will not execute in node environment.

//Datatypes
let name = "Ahsan Khan";
let age = 20;
let isLoggedIn = true;

let BigInt = 1234567890123456789012345n;
let temperature = null;
let unknownUser;

console.log(`The datatype of ${name} is `,typeof name);
console.log(`The datatype of ${age} is `,typeof age);
console.log(`The datatype of ${isLoggedIn} is `,typeof isLoggedIn);
console.log(`The datatype of ${BigInt} is `,typeof BigInt);
console.log(`The datatype of ${temperature} is `,typeof temperature);
console.log(`The datatype of ${unknownUser} is `,typeof unknownUser);
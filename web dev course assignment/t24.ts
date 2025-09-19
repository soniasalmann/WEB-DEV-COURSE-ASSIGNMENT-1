export {};

let str1 = "Hello";
let str2 = "world";
let num1 = 10;
let num2 = 20;
let colors = ["red", "blue", "green"];

// Equality & inequality with strings
console.log("str1 == 'Hello' ->", str1 == "Hello"); // ✅
console.log("str1 != 'hello' ->", str1 != "hello"); // ✅

// Lowercase tests
console.log("str1.toLowerCase() == 'hello' ->", str1.toLowerCase() == "hello"); // ✅
console.log("str2.toLowerCase() == 'WORLD' ->", str2.toLowerCase() == "WORLD"); // ❌

// Numerical tests
console.log("num1 == 10 ->", num1 == 10); // ✅
console.log("num1 > num2 ->", num1 > num2); // ❌
console.log("num2 >= 20 ->", num2 >= 20); // ✅
console.log("num1 <= 5 ->", num1 <= 5); // ❌

// `and` / `or`
console.log("(num1 < 15 && num2 > 15) ->", num1 < 15 && num2 > 15); // ✅
console.log("(num1 > 15 || num2 < 15) ->", num1 > 15 || num2 < 15); // ❌

// In array
console.log("Is 'red' in colors?", colors.includes("red")); // ✅

// Not in array
console.log("Is 'yellow' not in colors?", !colors.includes("yellow")); // ✅

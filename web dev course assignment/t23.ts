export {};

let car = "subaru";

console.log("Is car == 'subaru'? I predict True.");
console.log(car == "subaru"); // ✅

console.log("Is car === 'Subaru'? I predict False.");
console.log(car === "Subaru"); // ❌

console.log("Is car != 'audi'? I predict True.");
console.log(car != "audi"); // ✅

console.log("Is car === 'subaru'? I predict True.");
console.log(car === "subaru"); // ✅

console.log("Is car === 'toyota'? I predict False.");
console.log(car === "toyota"); // ❌

console.log("Is car.length > 3? I predict True.");
console.log(car.length > 3); // ✅

console.log("Is car.length < 3? I predict False.");
console.log(car.length < 3); // ❌

console.log("Does car start with 'sub'? I predict True.");
console.log(car.startsWith("sub")); // ✅

console.log("Does car end with 'x'? I predict False.");
console.log(car.endsWith("x")); // ❌

console.log("Is car != 'subaru'? I predict False.");
console.log(car != "subaru"); // ❌

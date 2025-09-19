"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fruits = ["Apple", "Banana", "Cherry"];
// Intentional error:
console.log("Intentional error:", fruits[5]); // Out of range
// Corrected:
console.log("Correct value:", fruits[2]);

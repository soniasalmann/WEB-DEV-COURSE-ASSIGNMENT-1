"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Starting with guest list from Exercise 15
var guests = ["Allama Iqbal", "Nelson Mandela", "Elon Musk"];
console.log("Original invitations:");
guests.forEach(function (g) { return console.log("Dear ".concat(g, ", you are cordially invited to dinner.")); });
// Found a bigger table
console.log("\nGreat news! I found a bigger dinner table, so I can invite more guests.");
// Add new guests
guests.unshift("Leonardo da Vinci"); // Beginning
guests.splice(Math.floor(guests.length / 2), 0, "Ada Lovelace"); // Middle
guests.push("Malala Yousafzai"); // End
// Print updated invitations
console.log("\nUpdated invitations:");
guests.forEach(function (g) { return console.log("Dear ".concat(g, ", please join me for dinner.")); });

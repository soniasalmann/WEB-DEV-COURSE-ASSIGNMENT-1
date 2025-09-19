"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Guest list from Exercise 14
var guestList = ["Allama Iqbal", "Marie Curie", "Elon Musk"];
// Print the original invitations
console.log("Dear ".concat(guestList[0], ", you are cordially invited to dinner at my place."));
console.log("Dear ".concat(guestList[1], ", you are cordially invited to dinner at my place."));
console.log("Dear ".concat(guestList[2], ", you are cordially invited to dinner at my place."));
// Guest who can’t make it
var unableToAttend = guestList[1];
console.log("\nUnfortunately, ".concat(unableToAttend, " can\u2019t make it to the dinner."));
// Replace the guest who can’t attend with a new guest
guestList[1] = "Nelson Mandela";
// Print the updated invitations
console.log("\nHere’s the updated guest list:");
console.log("Dear ".concat(guestList[0], ", you are cordially invited to dinner at my place."));
console.log("Dear ".concat(guestList[1], ", you are cordially invited to dinner at my place."));
console.log("Dear ".concat(guestList[2], ", you are cordially invited to dinner at my place."));

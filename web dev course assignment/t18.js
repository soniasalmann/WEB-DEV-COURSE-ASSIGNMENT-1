"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var places = ["Japan", "Switzerland", "Iceland", "New Zealand", "Canada"];
console.log("Original order:", places);
console.log("Alphabetical order:", __spreadArray([], places, true).sort());
console.log("Still original:", places);
console.log("Reverse alphabetical:", __spreadArray([], places, true).sort().reverse());
console.log("Still original:", places);
// Reverse the order
places.reverse();
console.log("Reversed order:", places);
// Back to original
places.reverse();
console.log("Back to original:", places);
// Sort alphabetically
places.sort();
console.log("Sorted alphabetically:", places);
// Sort in reverse alphabetical order
places.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted reverse alphabetically:", places);

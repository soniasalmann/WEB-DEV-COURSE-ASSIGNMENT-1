export {};

let places: string[] = ["Japan", "Switzerland", "Iceland", "New Zealand", "Canada"];

console.log("Original order:", places);
console.log("Alphabetical order:", [...places].sort());
console.log("Still original:", places);
console.log("Reverse alphabetical:", [...places].sort().reverse());
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
places.sort((a, b) => b.localeCompare(a));
console.log("Sorted reverse alphabetically:", places);

export {};

// Guest list from Exercise 14
let guestList: string[] = ["Allama Iqbal", "Marie Curie", "Elon Musk"];

// Print the original invitations
console.log(`Dear ${guestList[0]}, you are cordially invited to dinner at my place.`);
console.log(`Dear ${guestList[1]}, you are cordially invited to dinner at my place.`);
console.log(`Dear ${guestList[2]}, you are cordially invited to dinner at my place.`);

// Guest who can’t make it
let unableToAttend: string = guestList[1];
console.log(`\nUnfortunately, ${unableToAttend} can’t make it to the dinner.`);

// Replace the guest who can’t attend with a new guest
guestList[1] = "Nelson Mandela";

// Print the updated invitations
console.log("\nHere’s the updated guest list:");
console.log(`Dear ${guestList[0]}, you are cordially invited to dinner at my place.`);
console.log(`Dear ${guestList[1]}, you are cordially invited to dinner at my place.`);
console.log(`Dear ${guestList[2]}, you are cordially invited to dinner at my place.`);

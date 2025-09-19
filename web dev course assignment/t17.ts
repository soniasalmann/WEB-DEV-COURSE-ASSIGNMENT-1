export {};

// Start with the guests from Exercise 16
let guests: string[] = [
  "Leonardo da Vinci",
  "Allama Iqbal",
  "Ada Lovelace",
  "Nelson Mandela",
  "Elon Musk",
  "Malala Yousafzai",
];

console.log("Unfortunately, my new table won’t arrive on time. I can invite only two people.\n");

// Remove guests until only two remain
while (guests.length > 2) {
  const removed = guests.pop();
  console.log(`Sorry ${removed}, I can’t invite you to dinner this time.`);
}

// Print invitations for remaining guests
console.log("\nGuests still invited:");
guests.forEach(g => console.log(`Dear ${g}, you’re still invited to dinner.`));

// Remove the last two names
guests.pop();
guests.pop();

console.log("\nFinal guest list:", guests); // Should be empty

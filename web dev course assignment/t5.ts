export {};

// Store a person’s name with whitespace characters
let personName: string = "\t\n   Eric Smith   \n\t";

// Print the name with whitespace visible
console.log("Name with whitespace:");
console.log(personName);

// Print the name after stripping whitespace
console.log("\nName after stripping whitespace:");
console.log(personName.trim());

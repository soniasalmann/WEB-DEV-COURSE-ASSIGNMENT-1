
let personName: string = "Eric";

// Print name in different cases
console.log("Lowercase:", personName.toLowerCase());
console.log("Uppercase:", personName.toUpperCase());

// Title case function
function toTitleCase(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

console.log("Title case:", toTitleCase(personName));

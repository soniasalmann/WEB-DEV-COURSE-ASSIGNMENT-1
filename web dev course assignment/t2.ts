export {};
let personName: string = "eric smith";

console.log("Lowercase:", personName.toLowerCase());

console.log("Uppercase:", personName.toUpperCase());

// Titlecase
let titleCase =
  personName
    .split(" ")                 
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

console.log("Titlecase:", titleCase);

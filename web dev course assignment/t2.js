var personName = "eric smith";
console.log("Lowercase:", personName.toLowerCase());
console.log("Uppercase:", personName.toUpperCase());
// Titlecase
var titleCase = personName
    .split(" ")
    .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); })
    .join(" ");
console.log("Titlecase:", titleCase);

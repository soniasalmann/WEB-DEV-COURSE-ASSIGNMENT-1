function make_shirt_default(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Shirt size: ".concat(size, ", Message: \"").concat(message, "\""));
}
make_shirt_default(); // Large, default message
make_shirt_default("Medium"); // Medium, default message
make_shirt_default("Small", "Stay curious!"); // Small, custom

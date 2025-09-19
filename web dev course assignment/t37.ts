function make_shirt_default(
    size: string = "Large",
    message: string = "I love TypeScript"
  ): void {
    console.log(`Shirt size: ${size}, Message: "${message}"`);
  }
  
  make_shirt_default();                // Large, default message
  make_shirt_default("Medium");        // Medium, default message
  make_shirt_default("Small", "Stay curious!"); // Small, custom
  
function make_sandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
      console.log("- " + item);
    }
    console.log("Your sandwich is ready!\n");
  }
  
  make_sandwich("Ham", "Cheese");
  make_sandwich("Turkey", "Lettuce", "Tomato", "Mayo");
  make_sandwich("Peanut Butter", "Jelly");
  
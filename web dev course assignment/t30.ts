let usernames: string[] = ["admin", "eric", "john", "sara", "alex"];

for (let user of usernames) {
  if (user === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${user}, thank you for logging in again.`);
  }
}

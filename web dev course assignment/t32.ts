let current_users: string[] = ["John", "Alice", "Bob", "Charlie", "Emma"];
let new_users: string[] = ["alex", "BOB", "sophia", "john", "david"];

for (let newUser of new_users) {
  const taken = current_users.some(
    user => user.toLowerCase() === newUser.toLowerCase()
  );
  if (taken) {
    console.log(`Sorry, the username '${newUser}' is taken. Please choose another.`);
  } else {
    console.log(`The username '${newUser}' is available.`);
  }
}

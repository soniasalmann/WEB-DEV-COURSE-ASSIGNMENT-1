let magicians43: string[] = ["Harry Houdini", "David Blaine", "Penn & Teller"];

function make_great_copy(magicians: string[]): string[] {
  let newMagicians: string[] = [...magicians]; // copy
  for (let i = 0; i < newMagicians.length; i++) {
    newMagicians[i] = newMagicians[i] + " the Great";
  }
  return newMagicians;
}

let great_magicians: string[] = make_great_copy(magicians43);

console.log("Original Magicians:");
show_magicians(magicians43);

console.log("\nGreat Magicians:");
show_magicians(great_magicians);

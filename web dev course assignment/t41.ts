export {};
let magicians: string[] = ["Harry Houdini", "David Blaine", "Penn & Teller"];

function show_magicians(names: string[]): void {
  for (let name of names) {
    console.log(name);
  }
}

show_magicians(magicians);

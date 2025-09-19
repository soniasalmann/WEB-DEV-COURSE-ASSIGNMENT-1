let magicians42: string[] = ["Harry Houdini", "David Blaine", "Penn & Teller"];

function show_magicians(names: string[]): void {
  for (let name of names) {
    console.log(name);
  }
}

function make_great(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = magicians[i] + " the Great";
  }
}

make_great(magicians42);
show_magicians(magicians42);

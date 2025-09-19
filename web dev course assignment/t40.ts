type Album = { artist: string; title: string; tracks?: number };

function make_album(artist: string, title: string, tracks?: number): Album {
  let album: Album = { artist, title };
  if (tracks !== undefined) album.tracks = tracks;
  return album;
}

console.log(make_album("Taylor Swift", "Evermore"));
console.log(make_album("Ed Sheeran", "Divide", 12));
console.log(make_album("Adele", "30"));

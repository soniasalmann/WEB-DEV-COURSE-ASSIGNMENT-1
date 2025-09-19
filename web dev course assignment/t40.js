function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks !== undefined)
        album.tracks = tracks;
    return album;
}
console.log(make_album("Taylor Swift", "Evermore"));
console.log(make_album("Ed Sheeran", "Divide", 12));
console.log(make_album("Adele", "30"));

// Constructor function is for the Playlist Object
function Playlist(name) {
  this.name = name;          // Sets the overall name of the playlist     
  this.songs = [];           // Starts an empty array for songs
  this.currentSong = null;   // No active song playing; sets to null
}

// Will add a new song title to the playlist
Playlist.prototype.addSong = function(songTitle) {
  this.songs.push(songTitle);  // Pushes the song into the songs array
};

// This will play the first song in the playlist
Playlist.prototype.playFirst = function() {
  if (this.songs.length > 0) {              // Checks if there are songs in the playlist
    this.currentSong = this.songs[0];       // Sets currentSong to the first one
    console.log("Now playing:", this.currentSong);  // Shows which song is playing
  }
};

// This will skip the current song and play the next one
Playlist.prototype.skipSong = function() {
  if (this.songs.length > 1) {         // Skips if there's more than one song
    this.songs.shift();                // Removes the first song from the list
    this.currentSong = this.songs[0];  // Sets currentSong to the new first song
    console.log("Skipped! Now playing:", this.currentSong);
  } else {
    console.log("No more songs to skip."); // Message when there are no songs left
  }
};

// This will list song titles and the playlist name
Playlist.prototype.listSongs = function() {
  console.log("Playlist:", this.name);           // Shows the name of Playlist
  console.log("Songs:", this.songs.join(", "));  // Prints songs separated by commas
};

// MY Suggestion: Could add a way to remove a specific song by title

// New Method — removes a song by its "title" from the playlist
Playlist.prototype.removeSong = function(songTitle) {
  const index = this.songs.indexOf(songTitle);       // Finds song by title
  if (index !== -1) {
    this.songs.splice(index, 1);                      // Removes the song from the array
    console.log(`Removed: ${songTitle}`);             // Confirms removal
  } else {
    console.log(`Song not found: ${songTitle}`);      // Message if song is not in playlist
  }
};

// Create a new Playlist called "Game Day"
let myMix = new Playlist("Game Day");       // Instantiate Playlist Object
myMix.addSong("Lofi Study");                // Add song 1
myMix.addSong("Still DRE");                 // Add song 2
myMix.addSong("Thunderstruck");             // Add song 3

myMix.playFirst();                          // Play the first song
myMix.skipSong();                           // Skip to the next song
myMix.listSongs();                          // Show name of Playlist and all songs
myMix.removeSong("Chillhop Beats");         // Try removing a song not in the list


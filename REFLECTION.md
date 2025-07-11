
## What was the hardest part to understand?
The hardest part was understanding how  " this " works in each method. I had to focus on 
how it points to the specific Playlist object, especially when used in
functions attached to the prototype.

## How does this code use "This" to tie data and behavior together?
Each method uses "This" to refer back to the current Playlist instance.
For example, "This.songs" always accesses that playlist's songs, and 
"this.currentSong" keeps track 
of what’s playing in just that one object. This makes sure the
data and What its doing are always connected.

## What would you do differently if you wrote this object from scratch?
I’d use the class style instead of prototypes, and maybe add features
like shuffle, repeat, or song length.

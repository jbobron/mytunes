// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  model: SongModel,

  initialize: function(){
    // this.songQueue = [];
    this.on('enqueue', this.enqueue, this);
  },

  enqueue: function(song){
    //add song to song queue


    //if current song is set
    console.log(this.get('currentSong'))
    if(this.get('currentSong')){
      this.set('songQueue', song);
      //add to queue
    } else {
      this.set('currentSong', song);
    }
    //if no current song is set
      //play song
  }

});

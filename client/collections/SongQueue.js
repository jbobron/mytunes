// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  model: SongModel,

  initialize: function(){

    this.on('enqueue', this.enqueue, this);
    this.on('dequeue', this.dequeue, this);
    this.on('ended', this.ended, this);
  },

  enqueue: function(song){
    if(this.length === 1){
      this.playFirst();
    }
  },

  dequeue: function(song){
    if(this.at(0) === song){
      this.playNext();
    } else {
      this.remove(song);
    }
  },
  playFirst: function(){
    this.at(0).play();
  },

  playNext: function(){
    this.shift();
    if(this.length >= 1){
      this.playFirst();
    } else {
      this.trigger('stop');
    }
  }



});

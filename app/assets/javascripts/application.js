// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require_tree .
Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function(){
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
})

$(document).ready(function() {
  var arvideo = $('#video1player')[0];
  var arvideo_visible = false;
  
  var playVideo = function(video) {
    if (!video.playing) {
      if (video.ended) {
        video.currentTime = 0;
      }
      video.play();
    }
  }
  
  var pauseVideo = function(video) {
    if (video.playing) {
      video.pause();
    }
  }
  
  $('canvas').on('click', function() {
    if (arvideo_visible) {
      if (!arvideo.playing) {
        playVideo(arvideo);
      } else {
        pauseVideo(arvideo);
      }
    }
  });
  
  $('a-marker').on('marker-found', function(event) {
    arvideo_visible = true;
    playVideo(arvideo);
  });
  
  $('a-marker').on('marker-lost', function(event) {
    arvideo_visible = false;
    pauseVideo(arvideo);
  });
});
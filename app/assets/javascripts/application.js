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
//= require jquery.fancybox
//= require_tree .
Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function(){
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
})

$(document).ready(function() {
  var arvideo = $('#video1player')[0];
  
  var playVideo = function(video) {
    if (!video.playing) {
      if (video.ended) {
        video.currentTime = 0;
      }
      video.play();
    }
  }
  
  var pauseVideo = function(video) {
    console.log('pauseVideo called.');
    if (video.playing) {
      console.log('video is playing, pausing video');
      video.pause();
    }
  }
  
  $('canvas').on('click', function() {
    if (!arvideo.playing) {
      playVideo(arvideo);
    } else {
      pauseVideo(arvideo);
    }
  });
  
  $("[data-fancybox]").fancybox({
    afterLoad: function() {
      var vid = $('.fancybox-container video')[0];
      
      if (screenfull.enabled) {
        screenfull.request(vid);
      }
      
      playVideo(vid);
    }
  });
  
  if (screenfull.enabled) {
    screenfull.on('change', () => {
      if (!screenfull.isFullscreen) {
        var instance = $.fancybox.getInstance();
        instance.close();
      }
    });
  }
  
  $('a-marker').on('marker-found', function(event) {
    console.log('received marker-found');
    playVideo(arvideo);
  });
  
  $('a-marker').on('marker-lost', function(event) {
    console.log('received marker-lost');
    pauseVideo(arvideo);
  });
});
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

$(document).ready(function() {
  $("[data-fancybox]").fancybox({
    afterLoad: function() {
      var vid = $('.fancybox-container video')[0];
      
      if (screenfull.enabled) {
        screenfull.request(vid);
      }
      
      if (!vid.playing) {
        if (vid.ended) {
          vid.currentTime = 0;
        }
        vid.play();
      }
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
});
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

$(document).ready(function() {
  modals.init();
});

var modals = {
  autoplay : true,
  getwidth : function() {
    return this.getheight() * (16/9);
  },
  getheight : function() {
    return $(window).height() * .8;
  },
  init : function() {
    $(".video-player").dialog({
      width : this.getwidth(),
      height : this.getheight(),
      autoOpen : false,
      resizable : false,
      show : {
        effect : 'fade',
        duration : 300
      },
      hide : {
        effect : "fade",
        duration : 300
      }
    });
    
    $('#help-container').dialog({
      autoOpen: false,
      resizable: false,
      width: 'auto',
      height: 'auto',
      show : {
        effect : 'fade',
        duration : 300
      },
      hide : {
        effect : "fade",
        duration : 300
      }
    });

    $(".video-player").each(function() {
      $('.ui-widget-header').remove();
    });
    
    $("#help-container").each(function() {
      $('.ui-widget-header').remove();
    });

    $(".load-video").click(function() {
      var videoPlayerId = $(this).attr('id') + 'player';
      $("#" + videoPlayerId).dialog("open");
      if (modals.autoplay == true) {
        $('#' + videoPlayerId)[0].play();
      }
      $('#overlay').fadeIn();
    });
    
    $('.help-tip').on('click', function() {
      $('#help-container').dialog("open");
      $('#overlay').fadeIn();
    });

    $(document).mouseup(function(e) {
      if ($('.video-player').is(':visible')) {
        var container = $(".video-player");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
          container.dialog("close");
          $('#overlay').fadeOut(500);

          $('video').each(function() {
            $(this)[0].pause();
          });
        }
      } 
      
      if ($('#help-container').is(':visible')) {
        var container = $("#help-container");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
          container.dialog("close");
          $('#overlay').fadeOut(500);
        }
      }
    });
  }
}
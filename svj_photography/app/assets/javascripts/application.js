// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

 $(document).ready(function(){
      $(".button-collapse").sideNav();
    });
​
  var bumpIt = function() {
        $('body').css('margin-bottom', $('.footer').height());
      },
      didResize = false;
​
  bumpIt();
​
  $(window).resize(function() {
    didResize = true;
  });
  setInterval(function() {
    if(didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);
​
  $('button').click(function() {
    $(this).parent().append('<p>Another paragraph</p>');
    bumpIt();
  });
});

  $('#textarea1').val('New Text');
  $('#textarea1').trigger('autoresize');

   $(document).ready(function() {
    $('select').material_select();
  });

    $(document).ready(function() {
    $('input#input_text, textarea#textarea1').characterCounter();
  });

  
           

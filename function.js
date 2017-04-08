$(document).ready(function(){
  $('#slide-toogle').click(function(){
    $('body').toggleClass('toggled');
    $('header').toggleClass('toggled');
  });
  $('#slide-close').click(function(){
    $('body').toggleClass('toggled');
    $('header').toggleClass('toggled');
  });
  $('#slide-toogle,#sidenav').clickoutside(function(){
    $('body').removeClass('toggled');
    $('header').removeClass('toggled');
  });
});


(function(jQuery) {
   jQuery.fn.clickoutside = function(callback) {
      var outside = 1, self = $(this);
      self.cb = callback;
      this.click(function() {
         outside = 0;
      });
      $(document).click(function() {
         outside && self.cb();
         outside = 1;
      });
      return $(this);
   }
})(jQuery);

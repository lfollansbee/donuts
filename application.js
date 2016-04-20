$(document).ready(function() {
  $('.btn').on('mouseenter', function() {
    $(this).addClass('highlight');
  });
  $('.btn').on('mouseleave', function(){
    $(this).removeClass('highlight');
  });
});

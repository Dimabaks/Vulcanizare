$(document).ready(function() {
    $('form').submit(function(e) {
    e.preventDefault();

    $.ajax({
      type: 'POST',
      url: '../../dist/mail.php',
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
     /*  $('#consultation, #order').fadeOut();
      $('.overlay, #thanks').fadeIn('slow'); */


      $('form').trigger('reset');
    });
    return false;
  });

    $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });

});
$(function() {

  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
        window.location.hash = hash;
      });
    }
  });

  $('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
  });

  $('.hidden').hide();

  $('body').scrollspy({target: ".navbar", offset: 80}); 

  $('.click').click(function() {
    $('.hidden').slideToggle(400);
  });

  $(document).click(function(e) {
    if (!$(e.target).is('a')) {
        $('.collapse').collapse('hide');	    
      }
  });

    // Modal
  var modal = document.getElementById('modal');
  var btn = document.getElementById("modal-button");
  var span = document.getElementsByClassName("close")[0];

  $(btn).click(function() {
    $('.modal').fadeIn(400);
  });

  $(span).click(function() {
    $('.modal').fadeOut(400);
  });

  window.onclick = function(event) {
      if (event.target == modal) {
        $('.modal').fadeOut(400);
      }
  }

});
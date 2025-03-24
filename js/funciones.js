$(document).ready(function(){
  var flag = false;
  var scroll;
    
  $(window).scroll(function(){
    scroll = $(window).scrollTop();

    if(scroll > 0){
      if(!flag){
        $(".navbar").css({"background-color": "#fff"});
        $(".ul.menu li a").css({"color": "#000", "font-weight": "500"});
        flag = true;
      }
    } 
    else{
      if(flag){
        $(".navbar").css({"background-color": "rgba(0, 0, 0, 0.5)"});
        $(".ul.menu li a").css({"color": "#000", "font-weight": "500"});
        flag = false;
      }
    }     
  });
 var lastScrollTop = 0;
  $(window).scroll(function () {
    console.log($(window).scrollTop())
    if ($(window).scrollTop() > 0) {
      $('.navbar').addClass('scrolled');
    }
    if ($(window).scrollTop() < 1) {
      $('.navbar').removeClass('scrolled');
    }
  });
    
  var hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
  });

  var hamburger = document.querySelector(".hamburger");
    menu.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
  }); 
});


/*SMOOTH SCROLLING*/
$(function () {
  $('a[href^="#"]').on('click', function(event) {
    var target = $( $(this).attr('href') );
    if( target.length ) {
      event.preventDefault();
      $('html, body').animate({
          scrollTop: target.offset().top - 55
      }, 500);
    }
  }); 
  new WOW().init();
});

$(document).ready(function(){ 
  setTimeout(function () {
    $('.arriba').removeClass('animated1 rotateIn zoomIn').addClass('animated2 rotateLeft');}, 2500 ); // aca se define el segundo giro
  setTimeout(function () {
    $('.abajo').addClass('animated1 fadeIn');}, 2500 ); //aca se define el momento en que aparece la imagen inferior
});



/*Cambiar botón fijo del Menú*/

$(document).ready(function(){ 
  $(".nav-item").on("click", function(e){
    // Remove class active form all li.nav-tiem
    $("li.nav-item").removeClass("active");
    // Add Class to current Element. 
    $(this).addClass("active");
  });
});



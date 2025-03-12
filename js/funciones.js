$(document).ready(function(){
  var flag = false;
  var scroll;
  var percentTime;
    
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

// Permite que se ejecute el codigo cuando se halla cargado la pagina
$(function() { 
/*MENÃš DESPLEGABLE*/
  $(".menu-desplegable").click(function(){
    $ (this).children(".sub-menu").slideToggle();
  })
  $(".menu-desplegable").click(function(pp){
    pp.stopPropagation();
  }) 
});
document.addEventListener("DOMContentLoaded", function(){
// make it as accordion for smaller screens
if (window.innerWidth < 992) {

  // close all inner dropdowns when parent is closed
  document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
    everydropdown.addEventListener('hidden.bs.dropdown', function () {
      // after dropdown is hidden, then find all submenus
        this.querySelectorAll('.submenu').forEach(function(everysubmenu){
          // hide every submenu as well
          everysubmenu.style.display = 'none';
        });
    })
  });

  document.querySelectorAll('.dropdown-menu a').forEach(function(element){
    element.addEventListener('click', function (e) {
        let nextEl = this.nextElementSibling;
        if(nextEl && nextEl.classList.contains('submenu')) {  
          // prevent opening link if link needs to open dropdown
          e.preventDefault();
          if(nextEl.style.display == 'block'){
            nextEl.style.display = 'none';
          } else {
            nextEl.style.display = 'block';
          }

        }
    });
  })
}
// end if innerWidth
}); 
// DOMContentLoaded  end


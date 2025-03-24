jQuery(document).ready(function() {
    jQuery('#fullpageEndeos').fullpage({
        anchors: ['empresa', 'servicio', 'servicios', 'contacta', 'working'],
        menu: '#menu',
		scrollingSpeed: 700,
       

        //events
      
         afterLoad: function(anchorLink, index){

            if(anchorLink=='empresa'){
                jQuery('#empresa').find('.empresa').delay(200).animate({
                    left:'0%'
                },1000,'easeOutExpo');
               
            }
            if(anchorLink=='servicio'){
                jQuery('#servicios').find('.servicio').delay(200).slideDown(1000,'easeOutCubic');

            }
            if(anchorLink=='working'){
                jQuery('#section4 h2').delay(500).animate({
                    left:'0%'
                },1500,'easeOutExpo',function(){
                     jQuery('#section4 img').fadeTo(4000,1);
                })
               
            }

        },
        afterRender: function(){
                jQuery('#section0 img').delay(700).animate({left:'0%'},1500,'easeOutExpo');    
        },  
    });
});
$(document).ready(main);

var contador =1;
function main () {
    $('.menu_bar').click(function(){
        if (contador == 1){
            $('.navegacion_menu').animate({
                left: '0%'
            });
            contador = 0;
        }
        else {
            contador = 1;
            $('.navegacion_menu').animate({
                left: '-100%'
            })
        }
    });
    
    $('.submenu').click(function(){
        $(this).children('.children').slideToggle();
    })
}
$(function(){

     $('a[href*=#]').click(function() {

     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
         && location.hostname == this.hostname) {

             var $target = $(this.hash);

             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

             if ($target.length) {

                 var targetOffset = $target.offset().top;

                 $('html,body').animate({scrollTop: targetOffset}, 1000);

                 return false;

            }

       }

   });

});
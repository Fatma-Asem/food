$(document).ready(function() {

    //nice scroll
     $('body').niceScroll();

//************************************************************* */
     //loading to top
     $(window).on('beforeunload', function() {
        $('body').hide();
        $(window).scrollTop(0);
      });

//************************************************************** */
     //slidedown after navbar arrow
     $(window).scroll(function() {
       if ($(window).scrollTop() > $('.navbar').height()) {
        $('.navbar').addClass('no-after');

       } else {
        $('.navbar').removeClass('no-after');
       }
     });

//********************************************************** */

     //header arrow control left and right  hiddden on hover
     $('.header-section .header-arrow-control').hide();
     $('.header-section').hover(function() {
          $('.header-section .header-arrow-control').show() }, function() {
              $('.header-section .header-arrow-control').hide();

     });

//******************************************************* */
     //services section here so bordered the services link********************************/
     $(window).scroll(function() {
        console.log($(window).scrollTop());
        if ($(this).scrollTop() < 650) {$('.nav li').eq(0).addClass('border');}

         if($(this).scrollTop() >= 650) {
            $('.nav li').eq(0).removeClass('border');
             $('.nav li').eq(1).addClass('border');

         }  else {
            $('.nav li').eq(1).removeClass('border');
         }


      //menu section here so bordered the menu link***************************

       if($(this).scrollTop() >= 1325) {
            $('.nav li').eq(0).removeClass('border');
            $('.nav li').eq(1).removeClass('border');
            $('.nav li').eq(2).addClass('border');

        }  else {
           $('.nav li').eq(2).removeClass('border');
        }


     //special section here so bordered the about link

       if($(this).scrollTop() >= 2975) {
            $('.nav li').eq(0).removeClass('border');
            $('.nav li').eq(2).removeClass('border');
            $('.nav li').eq(3).addClass('border');

        }  else {
           $('.nav li').eq(3).removeClass('border');
        }

    //clients section here so bordered the about link
        if($(this).scrollTop() >= 4666) {
            $('.nav li').eq(0).removeClass('border');
            $('.nav li').eq(3).removeClass('border');
            $('.nav li').eq(4).addClass('border');

        }  else {
           $('.nav li').eq(4).removeClass('border');
        }

         //pricing section here so bordered the about link
         if($(this).scrollTop() >= 5140) {
            $('.nav li').eq(0).removeClass('border');
            $('.nav li').eq(4).removeClass('border');
            $('.nav li').eq(5).addClass('border');

        }  else {
           $('.nav li').eq(5).removeClass('border');
        }

         //contact section here so bordered the about link
         if($(this).scrollTop() >= 6006) {
            $('.nav li').eq(0).removeClass('border');
            $('.nav li').eq(5).removeClass('border');
            $('.nav li').eq(6).addClass('border');

        }  else {
           $('.nav li').eq(6).removeClass('border');
        }


          $(this).scrollTop() >= 930?  $('#scroll-top').fadeIn(1000) : $('#scroll-top').hide(); 
     } );

     $('#scroll-top').click(function() {
        $('html,body').animate({scrollTop: 0}, 600);
    });

//************************************************************** */

    //animate menu overlay
$('.thumbnail .menu-overlay').hover(function() {
        $('.order-link').fadeIn(30).animate({ opacity: '1'});
      }, function() {
        $('.order-link').fadeOut(30).animate({ opacity: '0'});
      });
      

//********************************************************************* */
$('.special-section .thumbnail .fa-star').click(function() {
       if($(this).hasClass('fas')) {
        $(this).removeClass('fas').addClass('far');
       } else if ($(this).hasClass('far')) {
        $(this).removeClass('far').addClass('fas');
       }
});

//*********************************************************************** */
//progress bar animation in special section
$(window).scroll(function() {
    if ($(this).scrollTop() > 3660) {
        $('.progress-bar').each(function(){
              $(this).css("width", $(this).attr("aria-valuenow") + "%");
     });
    }
 });

//******************************************************************************* */
/*filters images with link*/
$('.menu-section #caramel').click(function() {
   $('.col-md-4').filter('.ice-cream, .brownies, .all').css({display: 'none'});
   $('.col-md-4').filter('.caramel').css({display: 'inline-block'});
});

$('.menu-section #ice-cream').click(function() {
   $('.col-md-4').filter('.caramel, .brownies, .all').css({display: 'none'});
   $('.col-md-4').filter('.ice-cream').css({display: 'inline-block'});
});

$('.menu-section #brownies').click(function() {
   $('.col-md-4').filter('.caramel, .ice-cream, .all').css({display: 'none'});
   $('.col-md-4').filter('.brownies').css({display: 'inline-block'});
});

$('.menu-section #all').click(function() {
   $('.col-md-4').filter('.all').css({display: 'inline-block'});
});






     });
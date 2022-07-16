AOS.init({
    delay:200,
    duration:1000,
});



//scroll top
$(window).scroll(function() {
    $('.skywing').toggleClass('scrolled', $(this).scrollTop() > 50);
});


$(document).ready(function() {
    var offset = 200;
    var duration = 1000;

    $('.to-top').fadeOut({ scrollTop: 0 });
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.to-top').fadeIn(duration);

        } else {
            $('.to-top').fadeOut(duration);

        }
    });

    $('.to-top').click(function() {
        $('html,body').animate({ scrollTop: 0 }, 1000);

    })

});


//add active class
$(function() {
    'use strict';
    // space nav bar to elemnt 
    //$('body,html').css('paddingTop', $('.nav-link ').innerHeight()+11);  

    //smoothy scroll to element
    $('.nav-link,.dropdown-item').click(function(e) {
        e.preventDefault();
        // window.console.log($(this).data('scroll'));
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top - 70

        }, 1000);



    });
    //add active
    $('.nav-link,.dropdown-item').click(function() {

        // $(this).addClass('active').parent().sibIings().find('a').removeClass('active');
        $('.nav-link,.dropdown-item').removeClass('active');
        $(this).addClass('active');
    });

});


//add active on scroll
$(window).scroll(function() {

    $('.block').each(function() {
        if ($(window).scrollTop() > $(this).offset().top - 200) {
            // console.log($(this).attr('id'));

            var blockID = $(this).attr('id');

            $('.nav-link').removeClass('active');

            $('.nav-link[data-scroll="' + blockID + '"]').addClass('active');


        };
    });
});



//data type for write
var typed = new Typed(".Typed", {
    strings: ["UX/UI Design", "Graphic Design", "Motion Graphics", "Web Development", "Mobile Add development", "Digital Marketing"],
    typeSpeed: 100,
    backDelay: 900,
    // loop
    loop: true,
});


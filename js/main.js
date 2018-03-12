
jQuery(document).ready(function($) {
    $(".slider-part").owlCarousel({
        items: 1,
        dots: true,
        loop: true,
        autoplay: true
    });
    $(".clint-logo-iner").owlCarousel({
        items: 5,
        loop: true,
        autoplay: true,
        smartSpeed: 500,
        autoplayTimeout: 3000
    });
    $(".header").sticky({ topSpacing: 0 });
    $('.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        var headerH = '200';
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
   	 });
    jQuery(window).load(function(){
         jQuery(".preloder-active").fadeOut(5000);
    });
});





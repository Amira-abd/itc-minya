(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-150px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        dots: false,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{ items:1 },
            768:{ items:2 },
            992:{ items:3 }
        }
    });

    /* -------------------------------------------
       🔥 تفعيل القائمة حسب الـ Section أثناء التمرير
    ------------------------------------------- */
    const sections = $("section[id]");
    const navLinks = $(".navbar-nav .nav-link");

    // عند الضغط على أي عنصر بالقائمة
    $(".navbar-nav .nav-link").on("click", function () {
        navLinks.removeClass("active");
        $(this).addClass("active");
    });

    // عند التمرير
    $(window).on("scroll", function () {
        let scrollPos = $(this).scrollTop() + 150;

        sections.each(function () {
            let top = $(this).offset().top;
            let bottom = top + $(this).outerHeight();
            let id = $(this).attr("id");

            if (scrollPos >= top && scrollPos < bottom) {
                navLinks.removeClass("active");
                $('.navbar-nav .nav-link[href="#' + id + '"]').addClass("active");
            }
        });
    });

})(jQuery);

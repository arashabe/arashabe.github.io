$(document).ready(function() {
    // Back to top button
    var backToTopBtn = $("#backToTopBtn");

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            backToTopBtn.fadeIn();
        } else {
            backToTopBtn.fadeOut();
        }
    });

    backToTopBtn.on('click', function() {
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
    });
    // I added this function to automatically close the hamburger menu after clicking one of the options
    $('a.nav-link').on('click', function() {
        if ($('.navbar-collapse').hasClass('show')) {
            $('.navbar-collapse').collapse('hide');
        }
    });
});

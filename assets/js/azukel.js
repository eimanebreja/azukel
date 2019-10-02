$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {
        $('#return-to-top').fadeIn(200);
        $('.inq-btn').fadeIn(200);

    } else {
        $('#return-to-top').fadeOut(200);
        $('.inq-btn').fadeOut(200);

    }
});


(function () {
    $('.contact-area').on('click', function () {
        $('.contact').toggleClass('onn');
    })
})();
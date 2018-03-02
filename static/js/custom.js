$(document).ready(function () {

// portfolio
    $('.gallery ul li a').click(function() {
        var itemID = $(this).attr('href');
        $('.gallery ul').addClass('item_open');
        $('.lectures-wrapper').addClass('noscroll');
        $(itemID).addClass('item_open');
        return false;
    });
    $('.close').click(function() {
        $('.port, .gallery ul').removeClass('item_open');
        $('.lectures-wrapper').removeClass('noscroll');
        return false;
    });

});


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

    //Background images-

    var images_bg = [
        'static/img/placeholder-fullscreen.png',
        'static/img/image-placeholder.jpg',
        'static/img/top_bg.jpg',
    ]

    $('.fullBackground').fullClip({
        images: images_bg,
        transitionTime: 2000,
        wait: 5000
    });

});


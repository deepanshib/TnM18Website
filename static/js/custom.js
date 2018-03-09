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
        'static/img/pic1.png',
        'static/img/pic2.png',
        'static/img/pic3.png',
        'static/img/pic4.png',
        'static/img/pic5.png',
        // 'static/img/image-placeholder.jpg'

    ]

    $('.fullBackground').fullClip({
        images: images_bg,
        transitionTime: 2000,
        wait: 5000
    });


    //Event Type selection-
    var speed = 1000;
    $('.technical').on('click', function(){
        $('.form-wrapper div.showing:not(div.tech_events)').slideUp(speed);
        $('div.tech_events').slideToggle(speed);

        $('#non-technical').removeClass('nontech-click');
        $('#non-technical span').removeClass('nontech-click1');
        $('#cultural').removeClass('cult-click');
        $('#cultural span').removeClass('cult-click1');

        $('#technical').toggleClass('tech-click');
        $('#technical span').toggleClass('tech-click1');
    });

    $('.non-technical').on('click', function(){
        $('.form-wrapper div.showing:not(div.nontech_events)').slideUp(speed);
        $('div.nontech_events').slideToggle(speed);

        $('#technical').removeClass('tech-click');
        $('#technical span').removeClass('tech-click1');
        $('#cultural').removeClass('cult-click');
        $('#cultural span').removeClass('cult-click1');

        $('#non-technical').toggleClass('nontech-click');
        $('#non-technical span').toggleClass('nontech-click1');
    });

    $('.cultural').on('click', function(){
        $('.form-wrapper div.showing:not(div.cult_events)').slideUp(speed);
        $('div.cult_events').slideToggle(speed);

        $('#technical').removeClass('tech-click');
        $('#technical span').removeClass('tech-click1');
        $('#non-technical').removeClass('nontech-click');
        $('#non-technical span').removeClass('nontech-click1');
    
        $('#cultural').toggleClass('cult-click');
        $('#cultural span').toggleClass('cult-click1');
    });

});


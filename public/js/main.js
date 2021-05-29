$(document).ready(function() {
    $("a#icon-menu").click(function() {
        $("#site").toggleClass("open-res-menu");
        $("#icon-menu").children("i").toggleClass("fa-bars fa-times");
    });
    $("a#icon-times").click(function() {
        $("#site").removeClass("open-res-menu");
    });
    $(window).resize(function() {
        if ($(window).width() < 768) {
            $("#site").removeClass("open-res-menu");
            $("#icon-menu").children("i").removeClass("fa-times").addClass("fa-bars");
            // khi màn hình phóng lên, icon fa-time vẫn còn giữ lại, ta cần remove nó đi và thêm lại fa-bars vào
        }
    });
    $('.list-item').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
    $('.list-thumb').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })

    var src_img_first, src_img;
    src_img_first = $('.list-thumb li:first a').children('img').attr('src');
    $('#show-img img').attr('src', src_img_first);
    $('.list-thumb li a').click(function() {
        src_img = $(this).children('img').attr('src');
        $('#show-img a').children('img').attr('src', src_img);
        return false;
    });


    $(window).scroll(function() {
        if ($(this).scrollTop() != 0) {
            $('#wp-back-to-top').stop().fadeIn(150);
        } else {
            $('#wp-back-to-top').stop().fadeOut(150);
        }
    });
    $('#wp-back-to-top').click(function() {
        $('body,html').stop().animate({ scrollTop: 0 }, 800);
    });
});
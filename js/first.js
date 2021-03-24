
function menuHover() {
    $('.menu').mouseenter(function () {
        $('.menu-hide.active').hide().removeClass("active");
        $(this).find('.menu-hide').show().addClass("active");
    });
    
    $('body').click(function test () {
        $('body').find('.menu-hide').hide().removeClass("active");
    });

    $('.menu-hide').click(function (event) {
        event.stopPropagation();
    });

    $('.menu').click(function (event) {

        if (!$('.menu-hide').hasClass('active')) {
            $(this).find('.menu-hide').show().addClass("active");
            event.stopPropagation();

        }
    });
    
}

$(document).ready(menuHover);

function menuHover() {
    $('.menu').hover(function () {
        $('.menu-hide.active').hide();
        $(this).find('.menu-hide').show().addClass("active");
    });
    

    $('body').click(function () {
        $('body').find('.menu-hide').hide();
    });

    $('.menu-hide').click(function (event) {
        event.stopPropagation();
    });
    
}

$(document).ready(menuHover);
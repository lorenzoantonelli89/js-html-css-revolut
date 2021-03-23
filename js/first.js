
function menuHover() {
    $('.menu').hover(function () {
        $(this).find('.menu-hide').show();
    }, function () {
        // $('.menu').hover(function () {
        //     $(this).find('.menu-hide').show();
        // });
        $('body').click(function () {
            $('body').find('.menu-hide').hide();
        });
    });

    
    
}

$(document).ready(menuHover);
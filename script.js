$('.slider').slick({
    dots:true,
    slidesToShow:tablet(),
    slidesToScroll:tablet(),
    // infinite:true,
    autoplaySpeed:5000,
    // vertical:true,
    // verticalSwiping:true
})

// $(".slick-prev").html('<img src="img/close.png" width="40px" height="40px" alt="">')
$(".slick-prev").text("")
$(".slick-next").text("")

if (window.innerWidth <= 768){
    $('.burger_menu').after("<a href='' class='nav_menu_a'>ВОЙТИ</a>")
    $('.nav_menu_a').first().css({
        'padding': '12px 30px',
        'border': '1px solid white',
        'border-radius': '6px',
        'position': 'absolute',
        'right': '20px', 'top': '20px',
        'margin': '0px'
    })
}

function tablet() {
    if (window.innerWidth <= 768) {
        return 1
    } else {
        return 3
    }
}

$('.burger_menu').click(function() {
    $('.burger_menu_main_menu').css('display', 'block')
    $('.close_img').css('display', 'block')
})

$('.close_img').click(function() {
    $('.burger_menu_main_menu').css('display', 'none')
    $('.close_img').css('display', 'none')
})
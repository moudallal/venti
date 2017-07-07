( function( window ) {

    var scrollTop = 0;
    $(window).scroll(function(){

        scrollTop = $(window).scrollTop();
        $('.counter').html(scrollTop);

        if (scrollTop >= 90) {
            $('.navbar').addClass('shadowy-nav');
        } else if (scrollTop < 90) {
            $('.navbar').removeClass('shadowy-nav');
        }

    });

})( window );

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

    // Scroll to section given in the function's parameter
	var display = function(section){
		var barHeight = document.getElementById('head-bar').offsetHeight;
		$('html, body').animate({scrollTop: section.offset().top - barHeight}, 1000);
	};

    $('#scroll').click(function(){
        display($('.section-1'));
    });
    $('#home').click(function(){
        display($('.cover'));
    });
    $('#feature').click(function(){
        display($('.section-1'));
    });
    $('#team').click(function(){
        display($('.team'));
    });
    $('#demo').click(function(){
        display($('.demo'));
    });

})( window );

( function( window ) {

    var $aboutBtn = $('#about'),
        $teamBtn = $('#team'),
        $aboutSection = $('.about-section'),
        $teamSection = $('.team-section');

    var display = function(section){
		var barHeight = document.getElementById('nav').offsetHeight;
		$('html, body').animate({scrollTop: section.offset().top - barHeight}, 1000);
	};

    $aboutBtn.click(function(){
        display($aboutSection);
    });
    $teamBtn.click(function(){
        display($teamSection);
    });

})( window );

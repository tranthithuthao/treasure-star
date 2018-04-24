$(document).ready(function(){
		//Icon bar
		$('header .icon-menu').click(function(){
			$('header .navi').slideToggle();
			$('header .icon-menu').toggleClass('active');
			$('header .navi ul li a').toggleClass('active');
		});
	});
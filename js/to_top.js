//to top và navi
$(document).ready(function(){
		var top = $('#totop').height();
			//Scroll Window
			$(window).scroll(function() {
				if($(window).scrollTop() > top){
					$('header').addClass('header-active');
					$('.btn-top').addClass('active');
				}
				if($(window).scrollTop() <= top){
					$('header').removeClass('header-active');
					$('.btn-top').removeClass('active');
				}
			});
			
		$('.btn-top').click(function(){
					$('html,body').animate({scrollTop: 0}, '500');// Thời gian di trượt là 0.5 giây
				});
				

});
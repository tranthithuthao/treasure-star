$(document).ready(function(){
		//Service page
		var current = -1;

		var link = $(location).attr('href');
		var link_size = link.length;
		var position_current = 0;
		var id = '';
		for(var i = 0; i < link_size; i++){
		if(link[i] === '#'){
		 position_current = i;
		}
		}
		for(var j = position_current + 1; j < link_size; j++){
		id = id + link[j];
		}
		$('.service-element .service-content').slideUp();
		if(id === 'performance'){
		$('#service-page #performance .service-content').slideDown();
		current = $('#service-page #performance .service-content').index();
		}
		if(id === 'customer'){
		$('#service-page #customer .service-content').slideDown();
		current = $('#service-page #customer .service-content').index();
		}
		if(id === 'organisation'){
		$('#service-page #organisation .service-content').slideDown();
		current = $('#service-page #organisation .service-content').index();
		}

		$('.service-element h3').click(function(){
		if(current != $(this).parents('.service-element').index()){
		 $('.service-element .service-content').slideUp();
		 $(this).parents('.service-element').find('.service-content').slideToggle();
		}
		if(current === $(this).parents('.service-element').index()){
		 $(this).parents('.service-element').find('.service-content').slideToggle();
		}
		current = $(this).parents('.service-element').index();
		});
	});
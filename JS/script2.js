	var $toggleButton = $('#toggle'),
		$menu = $('.small-menu .items');
		$toggleButton.on('click', function(){
			$menu.slideToggle();
		});
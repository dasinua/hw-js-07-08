$(document).ready(function() {
	var $tabs = $('.tabs__item');
	var $text = $('.tabs__body p');
	$tabs.on('click', function(e) {
		var index = $(this).index();
		$tabs.removeClass('active');
		$(this).addClass('active');
		$text.removeClass('active-text');
		$text.eq(index).addClass('active-text');
	});
});

// Tooltip
$('input').hover(function() {
	$(this).next('em').animate({opacity: 'show', top: '-10'}, 'slow');
}, function() {
	$(this).next('em').animate({opacity: 'hide', top: '-25'}, 'fast');
});
$('.btn').click(function() {
	$('em').animate({opacity: 'show', top: '-10'}, 'slow');
	function func() {
    $('em').animate({opacity: 'hide', top: '-25'}, 'slow');
    }
	setTimeout(func, 2000);
});




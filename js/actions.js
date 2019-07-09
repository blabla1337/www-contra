AOS.init({ 
	startEvent: 'load',
	disable: 'mobile' 
});

$(document ).ready(function() {
	
	$('#scroll').click(function() {
		$('html,body').scrollTo('#about',200);
	});
	
});
$(document).ready(function(){
	//Add a listener for the form submission
	$('.sign-up-form').submit(function(){
		event.preventDefault();
		//Password must be at least 6 characters
		var password = $('.password').val();
			if(password.length < 6){
				$('.password').focus();
				$('.pass-error').html('Your passowd must be at least 6 characters');
		}
	});
	$('.sign-up-form').submit(function(){
		var fieldValidate = $('input').val();

	});
});
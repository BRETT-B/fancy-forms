$(document).ready(function(){
	//Add a listener for the form submission
	$('.sign-up-form').submit(function(){
		event.preventDefault();
		//Password must be at least 6 characters
		var password = $('.password').val();
			if(password.length < 6){
				$('.password').focus();
				$('.password-error').html('Your password must be at least 6 characters');
		}
		var email = $('.email').val();
		console.log(email);
		if(email.indexOf('@') == -1){
			$('.email-error').html('Please enter a valid email address');
		}
		var password = $('.password').val();
		var confirm = $('.confirm').val();
		if(password !== confirm){
			$('.confirm-error').html('Passwords must match');
			}
		var numCheck = $('.phone').val();
		if((numCheck[3] != "-") && (numCheck[7] != "-")){
			$('.phone-error').html('Use this format XXX-XXX-XXXX');
		}
	});
});
var Lock = function() {

	var handleLock = function() {

		$('.lock-form').validate({
			errorElement: 'span', //default input error message container
			errorClass: 'help-block', // default input error message class
			focusInvalid: false, // do not focus the last invalid input
			rules: {
				username: {
					required: true
				},
				password: {
					required: true
				},
				remember: {
					required: false
				}
			},

			messages: {
				password: {
					required: "密码不能为空"
				}
			},

			highlight: function(element) { // hightlight error inputs
				$(element)
					.closest('.form-group').addClass('has-error'); // set error class to the control group
			},

			success: function(label) {
				label.closest('.form-group').removeClass('has-error');
				label.remove();
			},

			errorPlacement: function(error, element) {
				error.insertAfter(element.closest('.input-icon'));
			},

			submitHandler: function(form) {
				form.submit(); // form validation success, call ajax form submit
			}
		});

		$('.lock-form input').keypress(function(e) {
			if (e.which == 13) {
				if ($('.lock-form').validate().form()) {
					$('.lock-form').submit(); //form validation success, call ajax form submit
				}
				return false;
			}
		});
	}

	/*var handleForgetPassword = function() {
		$('.forget-form').validate({
			errorElement: 'span', //default input error message container
			errorClass: 'help-block', // default input error message class
			focusInvalid: false, // do not focus the last invalid input
			ignore: "",
			rules: {
				email: {
					required: true,
					email: true
				}
			},

			messages: {
				email: {
					required: "Email is required."
				}
			},

			invalidHandler: function(event, validator) { //display error alert on form submit

			},

			highlight: function(element) { // hightlight error inputs
				$(element)
					.closest('.form-group').addClass('has-error'); // set error class to the control group
			},

			success: function(label) {
				label.closest('.form-group').removeClass('has-error');
				label.remove();
			},

			errorPlacement: function(error, element) {
				error.insertAfter(element.closest('.input-icon'));
			},

			submitHandler: function(form) {
				form.submit();
			}
		});

		$('.forget-form input').keypress(function(e) {
			if (e.which == 13) {
				if ($('.forget-form').validate().form()) {
					$('.forget-form').submit();
				}
				return false;
			}
		});

	}*/

	return {
		init: function() {

			handleLock();
			/*handleForgetPassword();*/
			/*handleRegister();*/

		}

	};

}();
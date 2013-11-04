//signup.js 
// add your JavaScript code to this file

$(function(){
	var stateSelect = $('select[name="state"]');
   	var idx;
   	var state;
 
   for(idx = 0; idx < usStates.length; ++idx) {
	    state = usStates[idx];
	    var option = $(document.createElement('option'));
	    option.attr('value', state.abbreviation);
	    option.html(state.name);
	    stateSelect.append(option);
    }

   $('.signup-form').submit(function(){
	    //code to execute when the sign-up form is submitted
	    //this is the raw DOM form element
	    //wrap it in a jQuery object so we can use jQuery methods on it
	    var signupForm = $(this);
	    var addr1Input = signupForm.find('input[name="addr-1"]');
	    var addr1Value = addr1Input.val();
	    if (addr1Value && addr1Value.trim().length > 0){
	    	var zip = signupForm.find('input[name="zip"]');
	    	var zipvalue = zip.val();
	      	if(zipvalue && zipvalue.trim().length > 0) {
	      		return true;
	      	}
	      	else{
	      		alert("A zip must be provided if an address is provided!!");
	      		return false;
	      	}
	 	}
	});

    $('.cancel-signup').click(function(){
	    $('.cancel-signup-modal').modal();
	})

   	$('.btn-abandon').click(function(){
   	 	window.location = 'http://www.google.com';
	});
});
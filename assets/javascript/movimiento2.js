$(document).ready(function(giftastic) { 


	$('#mbutton').click(function(buttons) {

	// Prevent page from refreshing!
	buttons.preventDefault()
		
	// recognizes value of text written in form 
	var a = $('.form-control').val(); 

	// See if text is grabbed 
	// console.log(a); 

	// Generate button function 
	function renderButton() {

	var b = $('<button>').text(a);

	// Add attribute to jazz up botton 
	b.addClass('btn btn-default');

	// Add ID
	$(b).attr('id', 'maker')

	// Add button to btn-group div
	$('.bcontainer').append(b);		

	}

	renderButton(); 

	}); 


	// Generate Giffs after clicking on buttons -not working...why?!
	$('#maker').click(function(makegiff) {

		makegiff.preventDefault()
		alert("Hello"); 

	});  






});
     

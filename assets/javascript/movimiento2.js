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


	// Generate Giffs after clicking on buttons -not working b/c it's a child element. 
	// I'm not quite sure how to access the newly generated buttons so I'll test out Giff generator with dummy button.
	$('#maker').on('click', function() {
		var dance = $(this).data("dance");
		var queryURL = 'http://api.giphy.com/v1/gifs/search?q=' + dance + '&api_key=dc6zaTOxFJmzC&limit=10';

		$.ajax({
			url: queryURL,
			method: 'GET'
		})
		.done(function(response){
			// store api object in a variable
			var results = response.data;
			console.log(results); 

			// Loop through movements
			for (var i = 0; i < results.length; i++) {

				// div where gif images will be stored
				var gifDiv = $('<div class="output">');

				// post ratings for giffs 
				var rating = results[i].rating;

				// post rating onto page
				var p = $('<p>').text("Rating: " + rating);

				// work with giff images-
				var danceImage = $('<img>')
				danceImage.attr('src', results[i].images.fixed_height.url);

				gifDiv.append(p); 
				gifDiv.append(danceImage);

				$('#giffs-here').append(gifDiv);
			}


		}); 


	});



});
     

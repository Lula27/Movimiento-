$(document).ready(function(giftastic) { 


	$('#mbutton').click(function(event) {
		console.log("Hi");
	// Prevent page from refreshing!
	event.preventDefault()
		
	// recognizes value of text written in form 
	var a = $('.form-control').val().trim(); 

	// See if text is grabbed 
	// console.log(a); 

	// Generate button function 
	function renderButton() {

	var b = $('<button>').text(a);

	// Add attribute to jazz up botton 
	b.addClass('btn btn-default maker');

	// 

	// Add button to btn-group div
	$('.bcontainer').append(b);		

	}

	renderButton(); 

	}); 


	// Generate Giffs after clicking on buttons -not working b/c it's a child element. 
	// I'm not quite sure how to access the newly generated buttons so I'll test out Giff generator with dummy button.
	$(document).on("click", ".maker", function() {                  /*looking for event inside whole document so that when new buttons are made, they will do something*/ 
		console.log("Hi from line 38!"); 
		var verb = $(this).text();        /*referring to previous elment that caused event to happen; text() w/o arguements retreives text*/ 
		console.log(verb); 
		var queryURL = 'http://api.giphy.com/v1/gifs/search?q=' + verb + '+&api_key=dc6zaTOxFJmzC';

		$.ajax({
			url: queryURL,
			method: 'GET'
		})
		.done(function(response){
			// store api object in a variable
			var results = response.data;
			console.log(results); 

			// Empty out div where gifs show up 
			$('#giffs-here').empty()

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
     

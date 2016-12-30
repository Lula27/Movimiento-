$(document).ready(function(giftastic) { 

	$("#mbutton").click(function(buttons) {

	// Prevent page from refreshing!
	buttons.preventDefault()
		// console.log("Success"); 

		$.ajax({

			url: "http://api.giphy.com/v1/gifs/search?q=" + $(".form-control").val() + "&api_key=dc6zaTOxFJmzC",  
			type: "GET",
			success: function(response) {
				console.log(response.data[0]);
			}


		})

	
	});

}); 
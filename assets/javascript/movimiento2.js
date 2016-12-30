$(document).ready(function(giftastic) { 

	// create variable to store user input in form 
		var actions = ["dance", "sleep", "laugh"]; 


	$("#mbutton").click(function(buttons) {

	// Prevent page from refreshing!
	buttons.preventDefault()
		

	var a = $(".form-control").val(); 

	// See if text is grabbed 
	// console.log(a); 

	// Generate button function 
	function renderButton() {

	var b = $("<button>").text(a);

	// Add attribute to jazz up botton 
	b.addClass("btn btn-default");

	// Add button to btn-group div
	$(".bcontainer").append(b);		

	}


	renderButton(); 



	// $(".bcontainer").append(b); 
	// $.ajax({

			// url: "http://api.giphy.com/v1/gifs/search?q=" + $(".form-control").val() + "&api_key=dc6zaTOxFJmzC",  
			// type: "GET",
			// success: function(response) {
			// 	console.log(response.data[0]);
			// }
	

	})

});
     

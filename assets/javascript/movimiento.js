// Linked to HTML 
$(document).ready(function() { 

		// create variable to store user input in form 
		var actions = ["dance", "sleep", "laugh"]; 

		 // displayMovieInfo function re-renders the HTML to display the appropriate content
      function displayGiffInfo() {

        // var movie = $(this).attr("data-name");
        // var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&r=json";

        // // Creates AJAX call for the specific movie button being clicked
        // $.ajax({
        //   url: queryURL,
        //   method: "GET"
        // }).done(function(response) {

          // YOUR CODE GOES HERE!!!

        // });

      }


		function renderButtons() {

			$("#btn-group").empty(); 

			// Looping through array of giffs
			for (var i = 0; i < actions.length; i++ ) {

				// dynamically generate buttons for each giff in array
				var c = $("<button>"); 

				// Add class to button 
				c.addClass("btn btn-default");

				// Add data-attribute 
				c.attr("data-name", actions[i]);

				// Add text
				c.text(actions[i]);

				// Add button to btn-group div
				$("#btn-group").append(c); 

			}
		}

		// Function to handle events when mbutton button is clicked
		$("#mbutton").on("click", function(event) {

			event.preventDefault();

			// Grab input from textbox
			var action = $("#movemaker").val().trim();

			// add text in movemaker to array
			actions.push(action);

			// Call renderButtons
			renderButtons(); 

		});

		// Add click event listeners to all elements with class of "btn btn-default"
		$(document).on("click", ".btn btn-default", displayGiffInfo);

		// Call renderButtons function to display initial buttons
		renderButtons(); 


}); 
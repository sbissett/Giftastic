$(document).ready(function () {
	var movies = ["infiniti wars", "captain marvel", "guardians of the galaxy", "", "avengers", "thor", "black panther", ];

	// Add buttons for original movies array
    
    function renderButtons() {
		$("#movie-buttons").empty();
		for (i = 0; i < movies.length; i++) {
			$("#movie-buttons").append("<button class='btn btn-success' data-movie='" + movies[i] + "'>" + movies[i] + "</button>");
		}
	}

    renderButtons();
    
    // adding a button f or movie entered

    $("#add-move").on("click", function() {
            event.preventDefault();
            var movie = $("movie-input").val().trim();
            movies.push(movie);
            renderButtons();
            return;

    });

}); // console logged - found an error - incorrect script adder on index.html.

    // Getting gifs from api... onto html

	$("button").on("click", function () {
		var movie = $(this).attr("data-movie");
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            movie + "&api_key=dc6zaTOxFJmzC&limit=10"
            
           $.ajax({
                url: queryURL,
                method: "GET"
            }).done(function (response) {
                var results = response.data;
                $("#movies").empty();
                for (var i = 0; i < results.length; i++) {
                    var movieDiv = $("<div>");
                    var p = $("<p>").text("Rating: " + results[i].rating);
                    var movieImg = $("<img>");

                movieImg.attr("src", results[i].images.original_still.url);
				movieImg.attr("data-still", results[i].images.original_still.url);
				movieImg.attr("data-animate", results[i].images.original.url);
				movieImg.attr("data-state", "still");
				movieImg.attr("class", "gif");
				movieDiv.append(p);
				movieDiv.append(movieImg);
				$("#movies").append(movieDiv);
			}
		});
    });
    
    unction changeState(){
		var state = $(this).attr("data-state");
		var animateImage = $(this).attr("data-animate");
		var stillImage = $(this).attr("data-still");

		if (state == "still") {
			$(this).attr("src", animateImage);
			$(this).attr("data-state", "animate");
		}

		else if (state == "animate") {
			$(this).attr("src", stillImage);
			$(this).attr("data-state", "still");
		}
	}
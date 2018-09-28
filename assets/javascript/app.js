$(document).ready(function () {
	var movies = ["moulin rouge", "clueless", "mean girls", "drop dead fred", "breakfast at tiffanys", "cruel intentions", "donnie darko", "a night at the roxbury"];

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
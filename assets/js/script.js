
      var movies = ["the fall", "looper", "prometheus", "donnie darko",  "scanner darkly", "2001: a space odyssey"];

      function displayMovieInfo() {

      $("#gifs-appear-here").empty()

      var movie = $(this).attr("data-name");
        

      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        movie + "&api_key=dc6zaTOxFJmzC&limit=9";

 
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {

         var results = response.data;

          
          for (var i = 0; i < results.length; i++) {

      
            var movieDiv = $("<div>");

        
            var animalImage = $('<img src="" data-still="" data-animate="" data-state="still" class="img-responsive gif">');
  
            animalImage.attr("src", results[i].images.fixed_width_still.url);
            animalImage.attr("data-still", results[i].images.fixed_width_still.url);
            animalImage.attr("data-animate", results[i].images.fixed_width.url);

       
            movieDiv.text("Rating: " + results[i].rating);
            movieDiv.append(animalImage);


           movieDiv.attr("class", "col-md-4")
            $("#gifs-appear-here").prepend(movieDiv);


       
        }});

      }


      function renderButtons() {

  
        $("#buttons-view").empty();

  
        for (var i = 0; i < movies.length; i++) {

 
          var a = $("<button>");
  
          a.addClass("movie gif");
    
          a.attr("data-name", movies[i]);
  
          a.text(movies[i]);
     
          $("#buttons-view").append(a);
        }
      }

  
      $("#add-movie").on("click", function(event) {
        event.preventDefault();
  
        var movie = $("#movie-input").val().trim();

        movies.push(movie);

        $("#movie-input").val("")

   
        renderButtons();
      });

      function animator() {
    
      var state = $(this).attr("data-state");
      var animate = $(this).attr("data-animate")
      var still = $(this).attr("src", $(this).attr("data-still"));


      if (state === "still") {
        $(this).attr("src", animate );
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    };


      $(document).on("click", ".movie", displayMovieInfo);
      $(document).on("mouseenter", ".gif", animator);
      $(document).on("mouseleave", ".gif", animator);
renderButtons()


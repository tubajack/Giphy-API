window.onload = function(){

    instruments = ["tuba", "trumpet", "clarinet", "flute", "saxophone"];

    displayButton();

    function displayButton(){

        $("#buttons").empty();

        for(var j = 0; j < instruments.length; j++){
            var music = $("<button>");
            music.addClass("instrument-button");
            music.attr("data", instruments[j]);
            music.text(instruments[j]);
            $("#buttons").append(music);
        }

    }

    //This function will display the giphys once a button is created
    $("#buttons").on("click", ".instrument-button", function(event){
        event.preventDefault();
        var musicalInstrument = $(this).attr("data");
        console.log(musicalInstrument);

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" 
        + musicalInstrument + "&api_key=ZoA453GaabwjKDDflogoSaFJnc6BOvd2&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"

        }).then(function(response){
            var results = response.data;

            for(var p = 0; p < results.length; p++){
                var gif = $("<div>");

                var rating = results[p].rating;

                var t = $("<p>").text("Rating: " + rating);

                var personImage = $("<img>");
                personImage.attr("src", results[p].images.fixed_height.url);

                gif.prepend(t);
                gif.prepend(personImage);

                $("#gifs-show-up").prepend(gif);

            }

        })

    });


    //This function handles events when an instrument is added
    $("#add-instrument").on("click", function(event){
        event.preventDefault();

        //Grab the input from the textbox
        var instrument = $("#instruments-input").val().trim();

        //Add that instrument to the array
        instruments.push(instrument);

        //Call the function which handles the array
        displayButton();
    });

}
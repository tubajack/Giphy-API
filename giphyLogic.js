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
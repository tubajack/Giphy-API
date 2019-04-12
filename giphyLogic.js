instruments = ["tuba", "trumpet", "clairnet", "flute", "saxophone"];

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
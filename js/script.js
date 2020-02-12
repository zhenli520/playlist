var songNames = [];
var songArtist = [];
var songLength = [];
var songImage = [];
var songLink = [];


/* global $ */

// BELOW Update the songs array with four of your favorites songs.
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above



function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    songNames.forEach(function(){
        inputSong = $("#song").val();
        $("#songs").show(inputSong);
    })
    songArtist.forEach(function(){
        inputArtist = $("#artist").val();
        $("#artists").show(inputArtist);
    })
    songLength.forEach(function(){
        inputLength = $("#length").val();
        $("#lengths").show(inputLength);
    })
    songImage.forEach(function(){
        inputImage = $("#image").val();
        $("#images").show(inputImage);
    })
    songLink.forEach(function(){
        inputLink = $("#link").val();
        $("#links").show(inputLink);
    })
}

function emptySongInfo(){
    $("#songs").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#images").empty();
    $("#links").empty();
}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    $("#songs").push(inputSong);
    $("#artists").push(inputArtist);
    $("#lengths").push(inputLength);
    $("#images").push(inputImage);
    $("#links").push(inputLink);

}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();

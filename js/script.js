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
    songNames.forEach(function(name){
        $("#songs").append("<div>" + name + "</div>");
    })
    songArtist.forEach(function(artist){
        $("#artists").append("<div>" + artist + "</div>");
    })
    songLength.forEach(function(length){
        $("#lengths").append("<div>" + length + "</div>");
    })
    songImage.forEach(function(image){
        $("#images").append("<div>" + image + "</div>");
    })
    songLink.forEach(function(link){
        $("#links").append("<div>" + name + "</div>");
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
    inputSong = $("#song").val();
    songNames.push(inputSong);

    inputArtist = $("#artist").val();
    songArtist.push(inputArtist);

    inputLength = $("#length").val();
    songLength.push(inputLength);

    inputImage = $("#image").val();
    songImage.push(inputImage);

    inputLink = $("#link").val();
    songLink.push(inputLink);

}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();

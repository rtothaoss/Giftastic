$(document).ready(function(){

$('button[data-person]').on('click', function() {
    var player = $(this).attr('data-person');
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    player + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method: 'GET'
    })
    .then(function(response){
        var results = response.data;

        console.log(response);
        console.log(results);

        for(var i = 0; i < results.length; i++) {
            var gifDiv = $('<div>')

            var rating = results[i].rating;

            var p = $('<p>').text('Rating: ' + rating);

            var playerImage = $('<img>');
            playerImage.attr("src", results[i].images.fixed_height.url);

            gifDiv.append(p);
            gifDiv.append(playerImage);

            $('#gifs-here').append(gifDiv);
        }
    })
})


});

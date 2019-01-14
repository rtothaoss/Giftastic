$(document).ready(function () {

    // $('button[data-person]').on('click', function() {
    //     var player = $(this).attr('data-person');
    //     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    //     player + "&api_key=dc6zaTOxFJmzC&limit=10";

    //     $.ajax({
    //         url: queryURL,
    //         method: 'GET'
    //     })
    //     .then(function(response){
    //         var results = response.data;

    //         console.log(response);
    //         console.log(results);

    //         for(var i = 0; i < results.length; i++) {
    //             var gifDiv = $('<div>')

    //             var rating = results[i].rating;

    //             var p = $('<p>').text('Rating: ' + rating);

    //             var playerImage = $('<img>');
    //             playerImage.attr("src", results[i].images.fixed_height.url);

    //             gifDiv.append(p);
    //             gifDiv.append(playerImage);

    //             $('#gifs-here').append(gifDiv);
    //         }
    //     })
    // })

    var players = ['Dak Prescott', 'Phillip Rivers', 'Ezekiel Elliot', 'Josh Norman', 'Tyreek Hill', 'Patrick Mahomes'];

    function showGifs() {

        $('#gifs-here').empty();

        var player = $(this).attr('data-person');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            player + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function(response){
            
            var results = response.data;

            console.log(response);
            console.log(results);

            for(var i = 0; i < results.length; i++) {
                
                var gifDiv = $('<div>');

                gifDiv.addClass('football-gifs');

                var rating = results[i].rating;

                var p = $('<p>').text('Rating: ' + rating);

                var playerImage = $('<img>')
                playerImage.attr('src', results[i].images.fixed_height.url);

                gifDiv.append(p);
                gifDiv.append(playerImage);

                $('.lead').addClass('hidden')

                $('#gifs-here').append(gifDiv);
            }
        })
    }


    function renderButtons() {
        $('.player-container').empty();

        for( var j = 0; j < players.length; j++) {
            var newButton = $('<button type=button class="btn btn-primary">');
            
            newButton.addClass('football-players')

            newButton.attr('data-person', players[j])

            newButton.text(players[j]);

            $('.player-container').append(newButton);

        };
    }

    $('#add-player').on('click', function(event) {
        event.preventDefault();

        var player = $('#player-input').val();

        players.push(player);

        renderButtons();

        
    });

    $(document).on('click', '.football-players', showGifs);

    renderButtons();

});

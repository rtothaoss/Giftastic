$(document).ready(function () {

    var players = ['Dak Prescott', 'Phillip Rivers', 'Ezekiel Elliot', 'Josh Norman', 'Tyreek Hill', 'Patrick Mahomes'];

    function showGifs() {

        $('#gifs-here').empty();

        var player = $(this).attr('data-person');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            player + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function (response) {

            var results = response.data;

            console.log(response);
            console.log(results);

            for (var i = 0; i < results.length; i++) {

                var gifDiv = $('<div>');

                gifDiv.addClass('football-gifs');

                var rating = results[i].rating;

                var p = $('<p>').text('Rating: ' + rating);

                var playerImage = $('<img>')
                playerImage.attr('src', results[i].images.fixed_height_still.url);
                playerImage.attr('data-still', results[i].images.fixed_height_still.url);
                playerImage.attr('data-animate', results[i].images.fixed_height.url);
                playerImage.attr('data-state', 'still');
                playerImage.addClass('gif');

                gifDiv.append(p);
                gifDiv.append(playerImage);

                // $('.lead').addClass('hidden')

                $('#gifs-here').append(gifDiv);

            }

            $('.gif').on('click', function () {

                var state = $(this).attr('data-state');

                var gifButton = $(this);

                if (state === 'still') {
                    gifButton.attr('src', gifButton.attr('data-animate'));
                    gifButton.attr('data-state', 'animate')
                } else if (state === 'animate') {
                    gifButton.attr('src', gifButton.attr('data-still'));
                    gifButton.attr('data-state', 'still')
                };

            });

        })
    }


    function renderButtons() {
        $('.player-container').empty();

        for (var j = 0; j < players.length; j++) {
            var newButton = $('<button type=button class="btn btn-primary">');

            newButton.addClass('football-players')

            newButton.attr('data-person', players[j])

            newButton.text(players[j]);

            $('.player-container').append(newButton);

        };
    }

    $('#add-player').on('click', function (event) {
        event.preventDefault();

        var player = $('#player-input').val();

        if (player === '') {
            return
        } else {
            players.push(player);
            $('#player-input').val('');
        }

        renderButtons();


    });


    $(document).on('click', '.football-players', showGifs);

    renderButtons();




});

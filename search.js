(function() {
    // Declare Variables
    var glitchUrl = "https://elegant-croissant.glitch.me/spotify"; //This url will make a request to the Spotify search API 
    var spotifyUrl = "";
    var users_input = "";
    var categoryList = "";
    var search_results = "";
    var music_info = "";
    var infiniteScroll = "?scroll=infinite"; // Users expect to scroll

    //The search button 
    $(".search").on("click", function() {
        getNewResults();
    });
    //Users input
    $("input").on("keydown", function(event) {
        if (event.which === 13) {// Enter a key
            getNewResults();//search for results
        }
    });

    $(document).on("click", ".more-button", function() {
        $("#results-container").remove(".more-button-container");
        ajaxRequest();
    });

    // Lets users scrolls down the page
    function scroll_position() {
        //If it reached to the bottom
        var reach_buttom = 
            $(document).scrollTop() + $(window).height() >=
            $(document).height() - 100;
        if (reach_buttom) {
            //When the user reached to the bottom call the ajaxRequest
            ajaxRequest();
        } else {
            //Set a timer for 1 second
            setTimeout(scroll_position, 1000);
        }
    }

    function getNewResults() {
        users_input = $('input[name="user-input"]').val();
        categoryList = $(".category").val();
        $("#results-container").html(music_info);
        ajaxRequest();
    }
    function getNextUrl(res) {
        spotifyUrl = res.next &&
            res.next.replace("https://api.spotify.com/v1/search", glitchUrl
            );
    }

    function ajaxRequest() {
        $.ajax({
            url: spotifyUrl || glitchUrl,
            data: {
                query: users_input,
                type: categoryList
            },
            success: function(res) {
                res = res.artists || res.albums;
                getResultsHtml(res);
                getNextUrl(res);
                if (infiniteScroll == location.search) {
                    scroll_position();
                }
            }
        });
    }

    function getResultsHtml(res) {
        var imageUrl,
            buttonHtml = "";
        if (res.items.length == 0) {
            search_results =
                "There are no results that match your search. Please try again with another search query.";
            $("#results-text").text(search_results);
        } else {
            search_results =
                res.total + " results for '" + users_input + "':";
            $("#results-text").text(search_results);
            var i = 0;
            for (i = 0; i < res.items.length; i++) {
                if (res.items.length >= 20) {
                    buttonHtml =
                        '<div class="more-button-container"><button class="more-button">Show more results</button></div>';
                }

                if (res.items[i].images.length === 0) {
                    imageUrl =
                        "https://developer.spotify.com/assets/branding-guidelines/icon2@2x.png";
                } else {
                    imageUrl = res.items[i].images[0].url;
                }

                var artistUrl = res.items[i].external_urls.spotify;
                var artistAlbumName = res.items[i].name;
                music_info +=
                    '<div class="one-of-twenty-container"><div class="results-albums-artists"><a href="' +
                    artistUrl +
                    '" target="_blank"><img src="' +
                    imageUrl +
                    '"></a></div><div class="results-name"><a href="' +
                    artistUrl +
                    '" target="_blank">' +
                    artistAlbumName +
                    "</a></div></div>";
            }
            $("#results-container").html(music_info);
            if (i == 20 && !infiniteScroll == location.search) {
                $("#results-container").append(buttonHtml);
            }
        }
    }

})();
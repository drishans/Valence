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
        show_results();
    });

    //Users input
    $("input").on("keydown", function(event) {
        if (event.which === 13) {// Enter a key
            show_results();//search for results
        }
    });

    // Lets users scrolls down the page
    function scroll_position() {
        //If it reached to the bottom
        // $(window).scrollTop() returns the position of the top of the page
        // $(document).height() returns the position of the bottom of the page
        var reach_buttom = 
            $(document).height() + $(window).scrollTop() >=
            $(document).scrollTop() - 100;
        if (reach_buttom) {
            //When the user reached to the bottom call the ajaxRequest
            ajaxRequest();
        } else {
            //Set a timer for 1 second
            setTimeout(scroll_position, 1000);
        }
    }
    $(document).on("click", ".show_more", function() {
        $("#results-container").remove(".show_more-container");
        ajaxRequest();
    });


    function show_results() {
        users_input = $('input[name="user-input"]').val();
        categoryList = $(".category").val();
        spotifyUrl = "";
        music_info = "";
        search_results = "";
        $("#results-container").html(music_info);
        ajaxRequest();
    }

    function apiUrl(res) {
        //The url will search for the spotify url and replace the glitchUrl
        spotifyUrl = res.next &&
            res.next.replace("https://api.spotify.com/v1/search", glitchUrl);
    }

    //Sends a request to the server
    function ajaxRequest() {
        $.ajax({
            url: spotifyUrl || glitchUrl,
            data: {
                //The data takes the users input as a query and the category as well
                query: users_input,
                type: categoryList
            },
            success: function(res) {
                //After it takes te query for the api, it looks for the artist/album
                res = res.artists || res.albums;
                results_format(res);
                apiUrl(res);
                
                if (infiniteScroll == location.search) {
                    scroll_position();
                }
            }
        });
    }

    function results_format(res) {
        var imageUrl = "";
        var buttonHtml = "";
        if (res.items.length == 0) {
            // If the user input search is no found
            search_results =
                "There are no results that matches your search.";
            $("#results-text").text(search_results);
        } else {
            search_results =
                res.total + " results of '" + users_input + "':";
            $("#results-text").text(search_results);
            var i = 0;
            for (i = 0; i < res.items.length; i++) {
                if (res.items.length >= 20) {
                    buttonHtml =
                        '<div class="show_more-container"><button class="show_more">Show more</button></div>';
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
                    '<div class="odd_even_container"><div class="results-albums-artists"><a href="' +
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

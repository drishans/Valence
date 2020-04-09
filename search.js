const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

var SpotifyWebApi = require('spotify-web-api-node');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

var spotifyApi = new SpotifyWebApi({
    clientId: ,
    clientSecret:,
    redirectUri: 'http://localhost:8888/callback '
});

spotifyApi
.clientCredentialsGrant()
.then(data=>{
    console.log(data.body)
    //spotifyApi.setAccessToken(data.body["access_token"]);
}).catch(error => {
    console.log("Can't retrieve access token", error);
});

app.get("/", function(req, res){
    res.sendFile(__dirname + "/search.html");
});
app.post("/", function(req, res){
    console.log(req.body.userInput);
    const query = req.body.userInput;
    const apiKey = "";
    const url = "https://api.spotify.com/v1/search"
})
app.listen(3000, function(){
    console.log("Server is running on port 3000")
})
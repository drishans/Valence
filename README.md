# CSCI3308 Software Development Project
**Application Name**: Valence.

**Team Number**: 102-4


**Team Name**: JAVYD

**Team Members** : Yosan Russom, Amey Erdenebileg, Vananh Le, Jack Kelly, Drishan Sarkar


![](public/logo.png)

## Project Description

Valence is a photo and music sharing website where users have their own personalized page where they can upload photos to their gallery and add music. The user starts by signing into their own Spotify account and is redirected to the website. Valence allows the user to look through their gallery and also upload their own pictures into the gallery. Music can also be played when hovering over the picture with the mouse. Valence also has a feature where users can comment on your gallery by simply inputting their name and their comment. Comments on your gallery will show below and this creates a way for users to interact with each other. Since you are connected through your own Spotify account when you log in, Valence also allows users to search music based on the artist and album that will direct them to Spotify where you can then add the song to your own playlists. The search feature is designed for users to easily look up information from Spotify based on the user’s input for the album or the artist. The user can also look at their display name, spotify id, email, spotify url, the country they are listening in, and their profile image on their profile page. 

## Repo organization/structure

* **Valence-search**
  * purplehome.png
  * search.css
  * search.html
  * search.js

* **public**
  * cereal.jpg
  * dark.jpg
  * detail.css
  * fall.jpg
  * home.html
  * index.html
  * login.html
  * logo.png
  * love.jpg
  * music.mp3
  * pink.jpg
  * purplehome.png
  * search.css
  * search.html
  * search.js
  * street.jpg
  * sunflower.jpg
  * sushi.jpg
  * winter.jpg
  
* **app.js**

## How to build/run/test/etc code

**Installation**

Must first install Node.js and npm.

* Download Node.js using this website: https://nodejs.org/en/download/

macOS

Download the macOS Installer: https://nodejs.org/en/#home-downloadhead

*If you want to download the package with bash:*

`curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"`

*Using Homebrew*

`brew install node`

Windows

* Download the Windows Installer: https://nodejs.org/en/#home-downloadhead

Once installed, clone the repositor and install its dependecies running:

`$ npm init`

`$ npm install`

**Authorization**

You will need to get your own credentials from the Spotify for Developers Dashboard: https://developer.spotify.com/dashboard/login

Create your application and you will get the Client ID and Client Secret

Replace app.js client_id, client_secret, and redirect_uri. For redirect_uri, enter: http://localhost:8888/callback 

**Run**

To run the cloned repo:

`node app.js`

## Project Milestone

https://github.com/drish96/valence_milestone

## Team Meeting Log

https://github.com/drish96/valence_logs/blob/master/Group%20Meeting%20Log%20Sheet.pdf


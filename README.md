# CSCI3308 Software Development Project
**Application Name**: Valence.

**Team Number**: 102-4


**Team Name**: JAVYD

**Team Members** : Yosan Russom, Amey Erdenebileg, Vananh Le, Jack Kelly, Drishan Sarkar


![](public/logo.png)

## Project Description

Valence is built so that users will have their own personalized page where they can upload pictures and can linked to their own personal Spotify account. Our website also allows users to search music based on the artist and album that will direct them to Spotify.


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


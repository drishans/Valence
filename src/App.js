import React from 'react';
//import logo from './logo.svg';
import './App.css';
import queryString from 'querystring';


let defaultTextColor = 'black';
let defaultStyle = {
  color: defaultTextColor
};
let fakeServerData = {
  user: {
    name: 'Yosan',
    playlists: [
      {
        name: 'My favorites',
        songs: [{name: 'Beat It', duration: 1345},
                 {name:'Let it go', duration: 1236},
                 {name:'Rose', duration: 70000}
      ]
     },
      {
        name: 'Discover Weekly',
        songs: [{name: 'the song', duration: 1345},
                {name: 'beat it', duration: 1236},
                {name: 'hello', duration: 70000}
      ]
     },
      {
        name: 'Another playlist',
        songs: [{name:'the song', duration: 1345},
                {name:'beat it', duration: 1236},
                {name: 'hello' , duration: 70000}
        ]
      },
      {
        name: 'Playlist!',
        songs: [{name:'the song', duration: 1345},
                {name:'beat it', duration: 1236},
                {name:'hello', duration: 70000}
        ]
      }
    ]
  }
};


class PlaylistCounter extends React.Component {
    render(){
    return(
      <div style={{...defaultStyle, width: "40%", display: 'inline-block'}}>
        <h2> {this.props.playlists.length} Playlist </h2>
      </div>
    );
  }
}

class HoursCounter extends React.Component {
    render(){
      let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
        return songs.concat(eachPlaylist.songs)
        }, [])
    let totalDuration = allSongs.reduce((sum, eachSong)=> {
      return sum + eachSong.duration
    }, 0) 
    return(
      <div style={{...defaultStyle, width: "40%", display: 'inline-block'}}>
        <h2> {Math.round(totalDuration/60)} hours </h2>
      </div>
    );
  }
}

class Filter extends React.Component{
  render(){
  return(
    <div>
      <img/>
      <input type = "text" onKeyUp = {event => 
        this.props.onTextChange(event.target.value)}/>
    </div>
    );
  }
}


class Playlist extends React.Component {
  render(){
    let playlist = this.props.playlist
  return(
    <div style = {{...defaultStyle, width: "25%", display: "inline-block"}}>
    <img />
    <h3>{playlist.name}</h3>
    <ul>
    {playlist.songs.map(song =>
      <li>{song.name}</li>
      )}
      </ul>
    </div>
  );
}
}
class App extends React.Component  {
  constructor(){
    super();
    this.state = {
      serverData: {},
      filterString: ''
  
  }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({serverData: fakeServerData});
    }, 1000);
  }
  render(){
    let playlistToRender =this.state.serverData.user ? this.state.serverData.user.playlists
    .filter(playlist =>
      playlist.name.toLowerCase().includes(
       this.state.filterString.toLowerCase())
      ) : []
  return (
    <div className="App">
   {this.state.serverData.user ? 
    <div>
    <h1 style = {{ ...defaultStyle, 'font-size': '54px'}}>
       {this.state.serverData.user.name}'s Playlists 
       </h1>
          <PlaylistCounter playlists = {playlistToRender}/>
          <HoursCounter playlists = {playlistToRender}/>
    <Filter onTextChange = {text => { 

      this.setState({filterString: text})
    }}/>
    {playlistToRender.map(playlist => 
      <Playlist playlist = {playlist}/>
      )}
  </div> : <h1 style = {defaultStyle}>Loading....</h1>
}
</div>
  );
}
}

export default App;

import React, { Component } from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        this.name: '',
        this.artist: '',
        this.album: '',
        this.id: ''
      ]};
      this.state = { playlistName: 'nun'};
      this.state = {
        playlistTracks: [
          this.name: '',
          this.artist: '',
          this.album: '',
          this.id: ''
        ]};
    };

    //addTrack(track) => {  }



  render() {
    return(
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
          <SearchBar />
            {/*Add a SearchBar component */}
            <div className="App-playlist">
            <SearchResults searchResults={ this.state.searchResults } />
            {/*Add a SearchResults component*/}
            <Playlist playlistName={ this.state.playlistName } playlistTracks={ this.state.playlistTracks }/>
            {/*Add a Playlist component*/}
            </div>
          </div>
      </div>
      );
    };
  };


export default App;

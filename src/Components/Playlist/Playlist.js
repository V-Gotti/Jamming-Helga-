import React from 'react';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
  render() {
    return(
      <div className="Playlist">
      <input defaultValue={'newPlaylist'}/>
      <TrackList tracks={this.props.playlistTracks}/>
      {/*Add a TrackList component */}
      <a class="Playlist-save"> SAVE TO SPOTIFY</a>
      </div>
    )
  }
}

export default Playlist;

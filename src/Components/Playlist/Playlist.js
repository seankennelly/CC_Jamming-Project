import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './playlist.css';

function Playlist(props) {
  function handleNameChange({target}) {
    props.onNameChange(target.value)
  };

  return (
    <div className="Playlist">
      <input defaultValue={'New Playlist'} onChange={handleNameChange}/>
      <Tracklist 
      // tracks={props.playlistTracks}
        userSearchResults={props.playlistTracks}
        onRemove={props.onRemove}
        isRemoval={true}
      />
      <button className="Playlist-save" onClick={props.onSave}>SAVE TO SPOTIFY</button>
    </div>
  )
};

export default Playlist;
import React from 'react';
import './track.css';

function Track(props) {

  function passTrack() {
    props.onAdd(props.track)
  };

  function passTrackToRemove() {
    props.onRemove(props.track)
  };

  function renderAction() {
    if (props.isRemoval) {
      return <button className="Track-action" onClick={passTrackToRemove}>-</button>
    } else {
      return <button className="Track-action" onClick={passTrack}>+</button>
    }
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{props.track.name}</h3>
        <p>{props.track.artist} | {props.track.album}</p>
      </div>
      {renderAction()}
    </div>
  )
};

export default Track;
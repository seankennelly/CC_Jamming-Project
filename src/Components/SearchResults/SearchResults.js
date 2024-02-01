import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './searchresults.css';

function SearchResults(props) {
  return (
    <div className="SearchResults">
      {/* <!-- Add a Tracklist component --> */}
      <Tracklist
        userSearchResults={props.userSearchResults}
        isRemoval={false}
        onAdd={props.onAdd}
      />
    </div>
  );
}

export default SearchResults;